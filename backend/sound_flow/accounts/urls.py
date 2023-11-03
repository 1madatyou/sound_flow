from django.urls import path

from accounts.views.registration import (
    RegistrationView,
    RegistrationConfirmView,
)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


urlpatterns = [
    path('registration', RegistrationView.as_view(), name='register'),
    path('registration-confirm', RegistrationConfirmView.as_view(), name='register'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify', TokenVerifyView.as_view(), name='token_verify'),
]
