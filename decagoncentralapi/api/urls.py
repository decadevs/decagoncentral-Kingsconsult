from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListUser.as_view()),
    path('login/', views.UserList.as_view(), name="auth-login"),
    path('<int:pk>/', views.UserDetail.as_view()), 
    path('login/', views.LoginView.as_view(), name="auth-login"),
    path('register/', views.RegisterUsersView.as_view(), name="auth-register")
]