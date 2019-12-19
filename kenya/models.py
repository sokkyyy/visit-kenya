from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    full_name = models.CharField(max_length=240)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.full_name

class Destination(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    latitude = models.DecimalField(default=0.0000, max_digits=6, decimal_places=4)
    longitude = models.DecimalField(default=0.0000,max_digits=6, decimal_places=4)
    
    def __str__(self):
        return self.name

class DestinationGallery(models.Model):
    image = models.ImageField(upload_to='gallery')
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE ,related_name='destination_gallery')
    
    def __unicode__(self):
        return self.image
