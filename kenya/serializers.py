from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import User,Destination,DestinationGallery
import time
from django.conf import settings

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','full_name','email')

class UserSerializerWithToken(serializers.ModelSerializer):
    
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self,obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        print(payload)
        token = jwt_encode_handler(payload)
        return token
    
    def create(self,validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token','full_name','username','email','password')

class DestinationSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    
    def get_images(self,destination):
        dest = []
        img = DestinationGallery.objects.filter(destination=destination)
        for i in img:
            dest.append(i.image.url)
        return dest
        
    class Meta: 
        model = Destination
        fields = ['pk','name','description','images','latitude','longitute']  