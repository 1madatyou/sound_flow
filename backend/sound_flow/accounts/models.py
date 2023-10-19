from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    tracks = models.ManyToManyField(to='music.Track', verbose_name='Tracks which added by user')
    followers = models.ManyToManyField(to='accounts.User', verbose_name='Users who follows the user')

    first_name = None
    last_name = None