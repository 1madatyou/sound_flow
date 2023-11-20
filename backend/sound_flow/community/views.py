from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


class UserFollowAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print(request.data)


