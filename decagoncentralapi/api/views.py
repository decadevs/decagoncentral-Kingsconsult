from django.shortcuts import render
from rest_framework import generics, status, permissions
from django.contrib.auth import authenticate, login
from rest_framework_jwt.settings import api_settings
from . import serializers
from .serializers import LoginSerializer, TokenSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password

# Get the JWT settings, add these lines after the import/from lines
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

# posts/views.py

from .models import User
from .serializers import UserSerializer

class ListUser(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

class LoginView(generics.CreateAPIView):
    """
    POST auth/login/
    """
    # This permission class will overide the global permission
    # class setting
    permission_classes = (permissions.AllowAny,)

    queryset = User.objects.all()
    serializer_class = LoginSerializer

    def get(self, request, *args, **kwargs):
        email = request.data.get("email", "")
        password = make_password(request.data.get("password", ""))
        user = authenticate(request, email=email, password=password)
        print(email, password, user)
        if user is not None:
            # login saves the user’s ID in the session,
            # using Django’s session framework.
            login(request, user)
            serializer = TokenSerializer(data={
                # using drf jwt utility functions to generate a token
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )})
            serializer.is_valid()
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    
    
class RegisterUsersView(generics.CreateAPIView):
    """
    POST auth/register/
    """
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def post(self, request, *args, **kwargs):
        fullname = request.data.get("fullname", "")
        username = request.data.get("username", "")
        email = request.data.get("email", "")
        password = make_password(request.data.get("password", ""))
        position = request.data.get("position", "")
        if not username and not password and not email:
            return Response(
                data={
                    "message": "username, password and email is required to register a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        new_user = User.objects.create(
            fullname=fullname, username=username, password=password, email=email, position=position,
        )
        return Response(status=status.HTTP_201_CREATED)
    
