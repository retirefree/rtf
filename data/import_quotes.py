import csv
import argparse
from re import sub
import re
from decimal import Decimal
import json

COLS = {
  'Index': 'id',
  'Company': 'company',
  'AM Best': 'rating',
  'Product': 'product',
  'Rate Type': 'rate_type',
  'Min Age': 'min_age',
  'Max Age': 'max_age',
  'Min Amount': 'min_amount',
  'Max Amount': 'max_amount',
  'States Excluded': 'states_ex',
  '3':'y3',
  '4':'y4',
  '5':'y5',
  '6':'y6',
  '7':'y7',
  '8':'y8',
  '9':'y9',
  '10':'y10'
}

def transform_rate_type(rate_type):
  rate_type_val = rate_type.replace('K', '000')
  # $100K+
  regex_min = r"^\$(?P<min>\d+)\+$"
  # <$50K
  regex_max = r"^\<\$(?P<max>\d+)$"
  # $50K-$99K
  regex_int = r"^\$(?P<min>\d+)\-\$(?P<max>\d+)$"

  match_min = re.search(regex_min, rate_type_val)
  if match_min:
    return {
      'min': int(match_min.group('min'))
    }
  match_max = re.search(regex_max, rate_type_val)
  if match_max:
    return {
      'max': int(match_max.group('max'))
    }
  match_int = re.search(regex_int, rate_type_val)
  if match_int:
      return {
        'min': int(match_int.group('min')),
        'max': int(match_int.group('max'))
      }

  raise SystemError(f'Cannot parse rate_type: {rate_type}')

def transform_amount(amount):
  return int(sub(r'[^\d.]', '', amount))

def transform_states_ex(states_ex):
  return list(map(lambda x: x.strip(), states_ex.split(',')))

def transform_obj(obj):
  return {
    'id': int(obj['id']),
    'company': obj['company'],
    'rating': obj['rating'],
    'product': obj['product'],
    'rate_type': transform_rate_type(obj['rate_type']),
    'min_age': int(obj['min_age']),
    'max_age': int(obj['max_age']),
    'min_amount': transform_amount(obj['min_amount']),
    'max_amount': transform_amount(obj['max_amount']),
    'states_ex': transform_states_ex(obj['states_ex']),
    'y3': obj['y3'],
    'y4': obj['y4'],
    'y5': obj['y5'],
    'y6': obj['y6'],
    'y7': obj['y7'],
    'y8': obj['y8'],
    'y9': obj['y9'],
    'y10': obj['y10'],
  }

def parse_csv(file_name):
  quotes = []
  with open(file_name, mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file, delimiter='|')
    line_count = 0
    for row in csv_reader:
      # if line_count == 0:
      #   print(row)
        #print(f'Column names are {", ".join(row)}')
      #   line_count += 1
      attrs = list(map(lambda key_val: (key_val[1], row[key_val[0]]), COLS.items()))
      obj = dict(attrs)
      new_obj = transform_obj(obj)
      quotes.append(new_obj)
      line_count += 1
    print(f'Processed {line_count} lines.')

  json_file_name = file_name.replace('.csv', '.json')
  with open(json_file_name, mode='w') as json_file:
    json_obj = json.dumps(quotes)
    json_file.write(json_obj)
    json_file.write('\n')


if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.add_argument("file_name")
  args = parser.parse_args()
  file_name = args.file_name

  print(f'Parsing {file_name}')
  parse_csv(file_name)
