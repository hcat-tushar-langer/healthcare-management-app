import json
import requests

api_url = 'http://localhost:8000/api/v1/healthcare/profile'

with open('./dummy-data.json') as f:
    data = json.load(f)

for obj in data:
    response = requests.post(api_url, data=obj)
    print(response)
