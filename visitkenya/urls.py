"""visitkenya URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from kenya import views
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/register/$',views.UserList.as_view()),
    url(r'^api/user/(\w+)$',views.user_details),
    url(r'^api/token-auth/$',obtain_jwt_token),
    url(r'^api/token-auth/refresh/$',refresh_jwt_token),
    url(r'^api/current_user/$', views.current_user),
    url(r'^api/destinations/$', views.DestinationList.as_view()),
    url(r'^api/destinations/destination/(\d+)/$',views.get_destination),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
