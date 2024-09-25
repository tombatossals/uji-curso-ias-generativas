import csv
import json

# Paso 1: Leer el archivo CSV
csv_file_path = 'imdb_top_1000.csv'
json_file_path = 'imdb_top_1000.json'

# Paso 2: Parsear el contenido del CSV
data = []
with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

# Paso 3: Convertir los datos a formato JSON
json_data = json.dumps(data, indent=4)

# Paso 4: Guardar el JSON en un archivo
with open(json_file_path, mode='w', encoding='utf-8') as json_file:
    json_file.write(json_data)

print(f"Datos convertidos y guardados en {json_file_path}")