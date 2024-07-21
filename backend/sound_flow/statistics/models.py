from django.db import models
from django.utils import timezone


class UserStatistic(models.Model):

    user = models.OneToOneField(
        to="accounts.User", on_delete=models.CASCADE, related_name="statistics"
    )

    count_of_tracks = models.IntegerField(default=0)
    count_of_playlists = models.IntegerField(default=0)
    count_of_streams = models.IntegerField(default=0)
    count_of_followers = models.IntegerField(default=0)


class UserUpdate(models.Model):
    """Represents user actions such as downloading music, creating playlist, etc."""

    REASON_CHOICES = [
        ("TRACK_ADD", "Track added"),
        ("TRACK_UPLOAD", "Track uploaded"),
        ("PLAYLIST_CREATE", "Playlist created"),
        ("FOLLOWING_START", "Following started"),
    ]

    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE)
    reason = models.CharField(
        verbose_name="Reason of update, for example downloading a track",
        choices=REASON_CHOICES,
    )

    creation_date = models.DateTimeField(default=timezone.now)
