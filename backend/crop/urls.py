from django.urls import path, include
from rest_framework import routers

from . import views

# from .views import CropView


app_name = 'crop'

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'profile', views.CropViewSet, basename='crop')

urlpatterns = [
    path('', include(router.urls)),
]
