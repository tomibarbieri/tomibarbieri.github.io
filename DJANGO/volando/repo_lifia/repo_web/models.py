from django.db import models
from django.conf import settings

class Persona(models.Model):
	name = models.CharField(max_length = 200)
	dni = models.IntegerField()
	def __unicode__(self):return self.name
class Curso(models.Model):
	name = models.CharField(max_length = 200)
	profesor = models.ManyToManyField(Persona,related_name='profesor')
	alumno = models.ManyToManyField(Persona,related_name='alumno')
	def __unicode__(self):return self.name