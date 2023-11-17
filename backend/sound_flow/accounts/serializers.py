from rest_framework import serializers

from statistics.serializers import UserStatisticSerializer
from statistics.models import UserStatistic

from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

class UserInfoSerializer(serializers.ModelSerializer):

    following = serializers.SerializerMethodField()
    statistic = UserStatisticSerializer(source='statistics',read_only=True)

    def get_following(self, user: User):
        request = self.context['request']
        if request.user.is_authenticated:
            return user.followers.filter(user_id=request.user.id).exists()
        return False

    class Meta:
        model = User
        fields = ['id', 'username', 'following', 'statistic']

    
        
    