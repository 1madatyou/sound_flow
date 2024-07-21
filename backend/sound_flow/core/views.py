from django.middleware.csrf import get_token
from rest_framework.views import APIView
from rest_framework.response import Response


class CSRFTokenView(APIView):

    def get(self, request):
        token = get_token(request)
        return Response({"token": token})
