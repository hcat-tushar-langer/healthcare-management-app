from django.urls import path, include
from rest_framework import routers

from . import views

# from .views import HealthcareView


app_name = 'healthcare'

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'profile', views.HealthcareViewSet, basename='healthcare')

urlpatterns = [
    path('', include(router.urls)),
]
