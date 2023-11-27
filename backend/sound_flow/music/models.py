from django.db import models
from django.utils import timezone


class Track(models.Model):

    name = models.CharField(max_length=255)
    author = models.ForeignKey(verbose_name='User who uploaded the track', to='accounts.User', on_delete=models.CASCADE)
    image = models.FileField(null=True)
    file = models.FileField()
    duration = models.IntegerField(verbose_name='Track duration in seconds')
    weight = models.IntegerField(verbose_name='Track weight in KB')

    streams = models.ManyToManyField(to='accounts.User', related_name='streams', blank=True)

    upload_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.author.username + ' - ' + self.name

class Playlist(models.Model):

    creator = models.ForeignKey('accounts.User', on_delete=models.SET_NULL, null=True)
    tracks = models.ManyToManyField(verbose_name='Tracks in the playlist', to='music.Track')

    creation_date = models.DateTimeField(default=timezone.now)




