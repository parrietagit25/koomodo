from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .serializers import RegisterSerializer
from rest_framework.serializers import ModelSerializer

# Serializer para mostrar usuarios registrados
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Vista de registro
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

# Vista de login
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        print("Recibido:", username, password)
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})
        return Response({"error": "Credenciales inválidas"}, status=400)

# Vista protegida para ver usuarios registrados
class UsuariosView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        usuarios = User.objects.all()
        serializer = UserSerializer(usuarios, many=True)
        return Response(serializer.data)
