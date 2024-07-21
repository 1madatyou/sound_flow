from django.urls import path

from .views import (
    UserFollowToggleAPIView,
)


urlpatterns = [
    path("users/<int:user_id>/follow", UserFollowToggleAPIView.as_view()),
]
