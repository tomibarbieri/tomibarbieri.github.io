from django.shortcuts import render
from serializers import PersonaSerializer, CursoSerializer
from models import Persona, Curso
from rest_framework.viewsets import ModelViewSet

class PersonaViewSet(ModelViewSet):
	queryset = Persona.objects.all()
	serializer_class = PersonaSerializer
class CursoViewSet(ModelViewSet):
	queryset = Curso.objects.all()
	serializer_class = CursoSerializer