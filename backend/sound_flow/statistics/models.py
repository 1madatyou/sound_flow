from django.db import models


class UserStatistic(models.Model):
    
    user = models.OneToOneField(to='accounts.User', on_delete=models.CASCADE)

    count_of_tracks = models.IntegerField(default=0)
    count_of_playlists = models.IntegerField(default=0)
    count_of_streams = models.IntegerField(default=0)
    count_of_followers = models.IntegerField(default=0)
