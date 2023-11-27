from django.urls import path

from .views import UserTracksView


urlpatterns = [
    path('users/<int:user_id>/tracks', UserTracksView.as_view())
]