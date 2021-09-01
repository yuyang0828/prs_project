from django.http import HttpResponse
from rest_framework import status
from .myAPI import handle_uploaded_file

from django.views.decorators.csrf import csrf_exempt

import base64

# Create your views here.


@csrf_exempt
def translate(request):
    if request.method == 'POST':
        img = request.FILES.get('target_img')
        try:
            # two kinds of response type
            f = handle_uploaded_file(img)

            # 二进制流 bytes
            return HttpResponse(f, content_type="image/jpeg", status=status.HTTP_200_OK)
            # base64
            # result = base64.b64encode(f)
            # return HttpResponse(result, content_type="image/jpeg", status=status.HTTP_200_OK)

        except Exception as e:
            print(e)
        return HttpResponse('ERROR')
    else:
        return HttpResponse('ERROR')
