from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
 
    class Meta:
        fields = ('id', 'fullname', 'username', 'password', 'email', 'position', 'created_at')
        model = models.User
        

class LoginSerializer(serializers.ModelSerializer):
          
    class Meta:
        fields = ('id', 'email', 'password')
        model = models.User
        
class TokenSerializer(serializers.Serializer):
    """
    This serializer serializes the token data
    """
    token = serializers.CharField(max_length=255)