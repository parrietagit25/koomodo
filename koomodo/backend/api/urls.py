from django.urls import path
from .views import RegisterView, LoginView, UsuariosView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('usuarios/', UsuariosView.as_view()), 
]
