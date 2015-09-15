#serializers.py
from models import Persona, Curso
from rest_framework.serializers import ModelSerializer

class PersonaSerializer(ModelSerializer):
	class Meta:
		model = Persona
class CursoSerializer(ModelSerializer):
	class Meta:
		model = Curso 