import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime

def publish_lead(first_name, last_name, email, product_id):
  scope = ['https://spreadsheets.google.com/feeds',
          'https://www.googleapis.com/auth/drive']

  credentials = ServiceAccountCredentials.from_json_keyfile_name(
    'retirefree-be2bf42301f8.json', scope)

  gc = gspread.authorize(credentials)

  res = gc.open("Auto Leads").sheet1.append_row(
    [first_name, last_name, email, product_id, str(datetime.now())], 
    value_input_option='USER_ENTERED')

  print(f'Result from gspread: {res}')

if __name__ == "__main__":
  publish_lead('Marius', 'Buleandra', 'mbuleandra@gmail.com', 3)
