import jwt

from django.utils import timezone
from django.conf import settings
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response

from accounts.models import User


# class LoginAPIView(APIView):
    
    # def post(self, request):
        
    #     print(request.data)

    #     try:
    #         email = request.data['email']
    #         password = request.data['password']
    #     except KeyError:
    #         return Response(
    #             {'error': 'Invalid request'},
    #             400
    #         )

    #     user = authenticate(email=email, password=password)
    #     print(user)
    #     print(User.objects.get(email=email))
    #     if not user:
    #         return Response(
    #             {'error': "Invalid credentials"},
    #             401
    #         )

    #     payload = {
    #         'user_id': user.id,
    #         'exp': timezone.now() + timezone.timedelta(minutes=60),
    #         'iat': timezone.now()
    #     }

    #     token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')

    #     response = Response()
    #     response.set_cookie(
    #         "jwt", value=token, httponly=True,
    #     )
    #     response.data = {'access': token}

    #     return response