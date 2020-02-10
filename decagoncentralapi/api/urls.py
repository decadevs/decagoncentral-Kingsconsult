from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListUser.as_view()),
    path('register/', views.RegisterUsersView.as_view(), name="auth-register")
]