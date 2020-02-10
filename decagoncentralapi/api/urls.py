from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name="auth-login"),
    path('register/', views.RegisterUsersView.as_view(), name="auth-register")
]