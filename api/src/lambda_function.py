import json
import re
from excel_utils import publish_lead

RATINGS = ['B-', 'B', 'B+', 'B++', 'A-', 'A', 'A+', 'A++']

MAP_RATINGS = {
  'BM'  : 'B-',
  'B'   : 'B',
  'BP'  : 'B+',
  'BPP' : 'B++',
  'AM'  : 'A-',
  'A'   : 'A',
  'AP'  : 'A+',
  'APP' : 'A++',
}

def parse_rating(rating):
  if rating not in MAP_RATINGS.keys():
    return 'any'
  return MAP_RATINGS[rating]
  

def lambda_handler(event, context):
  print(event)
  if event['httpMethod'] == 'OPTIONS':
    return success_message({})
    
  if event['path'] == '/quotes':
    return page_quotes(event)
  elif event['path'] == '/signup':
    return page_signup(event)
  else:
    return not_found_message()
    
def page_signup(event):
  body = event['body']
  if not body:
    return not_found_message()
  obj = json.loads(body)
  publish_lead(
    obj['first_name'], 
    obj['last_name'], 
    obj['email'], 
    obj['product'])
  return success_message({})
    
def page_quotes(event):
  params = event['queryStringParameters']
  filters = {}
  try:
    filters['amount'] = int(params['amount'])
    filters['term'] = int(params['term'])
    filters['state'] = params['state']
    filters['rating'] = parse_rating(params['rating'].upper())
    filters['name'] = params['name']
  except (KeyError, ValueError) as ex:
    print(f'Exception parsing params: {ex}')
    return {
      'statusCode': 400
    }
  quotes = get_quotes(filters)
  quotesResp = {
    'quotes': quotes
  }
  return success_message(quotesResp)
  
def success_message(body):
  return {
    'statusCode': 200,
    'headers': {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    'body': json.dumps(body)
  }
  
def not_found_message():
  return {
    'statusCode': 404,
    'headers': {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
  }

def load_data():
  with open('trim-20191122-quotes.json') as json_file:
      data = json.load(json_file)
      return data

def get_quotes(filters):
  quote_lines = load_data()
  quotes = []
  for quote_line in quote_lines:
    if quote_matches_filters(quote_line, filters):
      quote = quote_line_to_quote(quote_line, filters)
      quotes.append(quote)
  return quotes

def quote_matches_filters(quote, filters):
  if not quote_matches_amount(quote, filters['amount']):
    return False
  if not quote_matches_state(quote, filters['state']):
    return False
  if not quote_matches_term(quote, filters['term']):
    return False
  if not quote_matches_rating(quote, filters['rating']):
    return False
  if not quote_matches_name(quote, filters['name']):
    return False
  return True

def quote_matches_amount(quote, amount):
  if amount < quote['min_amount']:
    return False
  if amount > quote['max_amount']:
    return False
  if 'min' in quote['rate_type'] and amount < quote['rate_type']['min']:
    return False
  if 'max' in quote['rate_type'] and amount > quote['rate_type']['max']:
    return False
  return True

def quote_matches_rating(quote, rating):
  if rating.upper() not in RATINGS:
    return True
  quote_rating = RATINGS.index(quote['rating'].upper())
  filter_rating = RATINGS.index(rating.upper())
  return quote_rating >= filter_rating

def quote_matches_term(quote, term):
  return bool(quote[f'y{term}'])

def quote_matches_state(quote, state):
  return state not in quote['states_ex']

def quote_matches_name(quote, name):
  if not name:
    return True
  search_terms = re.findall(r'\w+', name)
  search_regex = "|".join(search_terms).lower()
  company_name = quote['company'].lower()
  return bool(re.search(search_regex, company_name))

def quote_line_to_quote(line, filters):
  term = filters['term']
  rate = float(line[f'y{term}'].rstrip('%'))
  return {
    'id': line['id'],
    'company': line['company'],
    'product': line['product'],
    'rating': line['rating'],
    'rate': rate,
    'term': term,
    'earnings': compute_earnings(float(filters['amount']), rate / 100, float(term)),
  }
  
def compute_earnings(amount, rate, term):
  return int(amount * (pow(1 + rate, term) - 1))

if __name__ == "__main__":
  evt = {
    'multiValueHeaders': 
    {
      'queryStringParameters':
      {
        'amount':'50000',
        'term':'5', 
        'state':'NY',
        'rating': 'any',
        'name': 'new york'
      }
    }
  }
  res = lambda_handler(evt, {})
  print(res)


# import json

# def lambda_handler(event, context):
#     print(event)
#     quotes = get_quotes()
#     return {
#         'statusCode': 200,
#         'headers': {
#             "Access-Control-Allow-Origin": "*",
#             "Access-Control-Allow-Headers": "Content-Type",
#             "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
#         },
#         'body': json.dumps(quotes)
#     }

# def get_quotes():
#     with open('quotes.json') as json_file:
#         data = json.load(json_file)
#         return data
