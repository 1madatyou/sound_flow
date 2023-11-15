from django.contrib import admin
from django.urls import path, include

from . views import CSRFTokenView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('accounts.urls')),

    path('api/v1/csrf_token', CSRFTokenView.as_view())
]   
