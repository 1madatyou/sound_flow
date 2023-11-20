from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    email = models.EmailField(unique=True,
        error_messages={
            'unique': 'A user with this email already exists.'
        }  
    )

    tracks = models.ManyToManyField(to='music.Track', verbose_name='Tracks which added by user')
    followers = models.ManyToManyField(to='accounts.User', verbose_name='Users who follows the user')

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['password, username']


class UserImage(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='image')
    image = models.FileField(verbose_name="Avatar of user", upload_to='user_images', null=True)
