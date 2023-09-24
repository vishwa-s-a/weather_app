from django.shortcuts import render
import requests
import json
from django.http import JsonResponse
from django.conf import settings


# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def disp(request,variable):
    apiKey=settings.API_KEY
    api_url = f"https://api.openweathermap.org/data/2.5/weather?q={variable}&units=metric&appid={apiKey}"
    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            # Process the data as needed
            location=data["name"]
            temp=data["main"]["temp"]
            humidity=data["main"]["humidity"]
            description=data["weather"][0]["description"]

            send={
                "location":location,
                "temp":temp,
                "humidity":humidity,
                "description":description
            }

            #json_data=json.dumps(send)
            #return HttpResponse(f"{send}")
            return JsonResponse(data)
        else:
            return JsonResponse({"error": "Failed to fetch data"}, status=500)
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": str(e)}, status=500)

    #return HttpResponse(f"Hello Vishwa, You are at this route. and variable is {variable}")