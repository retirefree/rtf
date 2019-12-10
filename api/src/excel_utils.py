import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime
import os

def publish_lead(first_name, last_name, email, product_id):
  scope = ['https://spreadsheets.google.com/feeds',
          'https://www.googleapis.com/auth/drive']

  if not os.path.exists("google_creds.json"):
    creds_json = os.getenv('GOOG_CREDS')
    with open("google_creds.json", "w") as creds_file:
      creds_file.write(creds_json)
  credentials = ServiceAccountCredentials.from_json_keyfile_name(
    "google_creds.json", scope)

  gc = gspread.authorize(credentials)

  res = gc.open("Auto Leads").sheet1.append_row(
    [first_name, last_name, email, product_id, str(datetime.now())], 
    value_input_option='USER_ENTERED')

  print(f'Result from gspread: {res}')

if __name__ == "__main__":
  publish_lead('Marius', 'Buleandra', 'mbuleandra@gmail.com', 3)
