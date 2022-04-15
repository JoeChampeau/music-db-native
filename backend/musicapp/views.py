from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, ArtistSerializer, RatingSerializer
from .models import User, Artist, Rating

# Create your views here.

class UserView(viewsets.ModelViewSet):
  # Create a new TodoSerializer instance.
  serializer_class = UserSerializer
  # Todo.objects.all() retrieves all the Todo objects in the database.
  queryset = User.objects.all()

class ArtistView(viewsets.ModelViewSet):
  # Create a new TodoSerializer instance.
  serializer_class = ArtistSerializer
  # Todo.objects.all() retrieves all the Todo objects in the database.
  queryset = Artist.objects.all()
    

class RatingView(viewsets.ModelViewSet):
  # Create a new TodoSerializer instance.
  serializer_class = RatingSerializer
  # Todo.objects.all() retrieves all the Todo objects in the database.
  queryset = Rating.objects.all()