from django.db import models
from django.utils import timezone


class Track(models.Model):

    author = models.ForeignKey(verbose_name='User who uploaded the track', to='accounts.User', on_delete=models.CASCADE)
    file = models.FileField()
    duration = models.IntegerField(verbose_name='Track duration in seconds')
    weight = models.IntegerField(verbose_name='Track weight in KB')

    streams = models.IntegerField(verbose_name='Number of times a track has been played by other users')

    upload_date = models.DateTimeField(default=timezone.now)

class Playlist(models.Model):

    creator = models.ForeignKey('accounts.User', on_delete=models.SET_NULL, null=True)
    tracks = models.ManyToManyField(verbose_name='Tracks in the playlist', to='music.Track')

    creation_date = models.DateTimeField(default=timezone.now)


