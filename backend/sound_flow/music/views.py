from django.db.models.query import QuerySet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status


from accounts.models import User

from .serializers import TrackSerializer
from .models import Track


class UserTracksView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user_id = kwargs.pop('user_id')
        user = User.objects.get(id=user_id)
        user_tracks = user.tracks.all()

        if not len(user_tracks):
            return Response(status=status.HTTP_404_NOT_FOUND)

        serilizer = TrackSerializer(user_tracks, many=True)

        if not serilizer.is_valid():
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        return Response(
            data=serilizer.data,
            status=status.HTTP_200_OK)
    
