from django.http import HttpResponse
from rest_framework import status


def handle_uploaded_file(f):
    with open('try.jpeg', 'wb+') as destination:
        destination.write(f.read())

    try:
        with open('sampleResponse.jpeg', "rb") as f:
            # f: <class '_io.BufferedReader'>
            # f.read() <class 'bytes'>
            return f.read()

    except Exception as e:
        print(e)
