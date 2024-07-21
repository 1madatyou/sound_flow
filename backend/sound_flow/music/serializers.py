from rest_framework.serializers import ModelSerializer

from accounts.serializers import UserSerializer
from .models import Track


class TrackSerializer(ModelSerializer):

    class Meta:
        model = Track
        fields = ("id", "name", "author", "image", "file")
