from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import models

from statistics.models import UserStatistic


class User(AbstractUser):

    email = models.EmailField(
        unique=True, error_messages={"unique": "A user with this email already exists."}
    )

    tracks = models.ManyToManyField(
        to="music.Track", verbose_name="Tracks which added by user", blank=True
    )
    followers = models.ManyToManyField(
        to="accounts.User", verbose_name="Users who follows the user", blank=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["password", "username"]

    def __str__(self):
        return self.email + f"[{self.id}]"


@receiver(post_save, sender=User)
def my_signal_receiver(sender, instance, created, **kwargs):
    if created:
        UserStatistic.objects.create(user=instance)


class UserImage(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="image")
    image = models.FileField(
        verbose_name="Avatar of user", upload_to="user_images", null=True
    )
