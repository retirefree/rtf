import csv
import argparse

TRIM_HEADER_ROWS = 9
TRIM_COLS = [35, 34, 20, 16, 0]
COL_RENAME = {
  12: 'Min Age',
  13: 'Max Age',
  15: 'Min Amount',
  16: 'Max Amount',
}

def trim_csv(file_name):
  trim_file_name = f'trim-{file_name}'
  with open(file_name) as csv_file, open(trim_file_name, mode='w') as out_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
      line_count += 1
      if line_count < TRIM_HEADER_ROWS:
        pass 
      else:
        for col in TRIM_COLS:
          del row[col]
        if line_count == TRIM_HEADER_ROWS:
          for key, val in COL_RENAME.items():
            row[key] = val
        new_row = list(map(lambda col: col.strip(), row))
        out_file.write('|'.join(new_row))
        out_file.write('\n')
    print(f'Processed {line_count} lines.')

if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.add_argument("file_name")
  args = parser.parse_args()
  file_name = args.file_name

  print(f'Trimming {file_name}')
  trim_csv(file_name)
