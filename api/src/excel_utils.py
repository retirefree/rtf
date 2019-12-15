import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime
import os

GOOG_CREDS = {
    "type": "service_account",
    "project_id": "versatile-hub-261417",
    "private_key_id": "2b8fbdd0b35341b9b52d7eb07992f327da0f7d08",
    "private_key": "",
    "client_email": "retire-free@versatile-hub-261417.iam.gserviceaccount.com",
    "client_id": "102600541095114820808",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/retire-free%40versatile-hub-261417.iam.gserviceaccount.com"
}

GOOG_KEY = os.getenv('GOOG_KEY')
GOOG_CREDS['private_key'] = bytes(GOOG_KEY, "utf-8").decode("unicode_escape")

def setup_gc():
  scope = ['https://spreadsheets.google.com/feeds',
          'https://www.googleapis.com/auth/drive']

  credentials = ServiceAccountCredentials.from_json_keyfile_dict(
    GOOG_CREDS, scope)

  gc = gspread.authorize(credentials)
  return gc

def publish_lead(first_name, last_name, email, product_id):
  gc = setup_gc()

  res = gc.open("Auto Leads").sheet1.append_row(
    [first_name, last_name, email, product_id, str(datetime.now())], 
    value_input_option='USER_ENTERED')

  print(f'Result from lead gspread: {res}')

def publish_message(contact_name, email_address, subject, message):
  gc = setup_gc()
  
  res = gc.open("Auto Leads").worksheet('Contact').append_row(
    [contact_name, email_address, subject, message, str(datetime.now())], 
    value_input_option='USER_ENTERED')

  print(f'Result from contact gspread: {res}')

if __name__ == "__main__":
  #publish_lead('Marius', 'Buleandra', 'mbuleandra@gmail.com', 3)
  publish_message('Marius B', 'mbuleandra@gmail.com', 'Hello', 'Oh Hi There')
