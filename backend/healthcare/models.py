import uuid
from django.db import models
from django.conf import settings
from django.shortcuts import reverse
from datetime import datetime, timedelta
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from .managers import UserManager


# Create your models here.
class Healthcare(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(max_length=1000)
    image = models.URLField(max_length=500, blank=True)
    website = models.URLField(max_length=500, blank=True)

    def __str__(self):
        return f'{self.id}'


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    healthcare = models.ManyToManyField(
        'Healthcare',
        related_name='users',
        blank=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()
