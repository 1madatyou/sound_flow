from rest_framework.generics import RetrieveAPIView

from accounts.serializers import UserInfoSerializer
from accounts.models import User


class UserRetrieveAPIView(RetrieveAPIView):
    serializer_class = UserInfoSerializer
    queryset = User.objects.all()

    