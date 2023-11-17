from rest_framework import serializers

from .models import UserStatistic


class UserStatisticSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserStatistic
        exclude = ('id', 'user')
