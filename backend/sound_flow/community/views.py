from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.serializers import UserInfoSerializer

from .services.user_follow_service import UserFollowService


class UserFollowToggleAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def _get_service(self, target_user_id: int, follower_user_id: int) -> UserFollowService:
        service = UserFollowService(follower_user_id, target_user_id)
        return service


    def post(self, request, user_id: int, *args, **kwargs):
        service = self._get_service(user_id, request.user.id)
        service.follow()

        return Response(
            data=UserInfoSerializer(service.target_user, context={'request': request}).data,
            status=200
        )
    
    def delete(self, request, user_id: int, *args, **kwargs):
        service = self._get_service(user_id, request.user.id)
        service.unfollow()

        return Response(
            data=UserInfoSerializer(service.target_user, context={'request': request}).data,
            status=200
        )
    

