# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('dni', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='curso',
            name='alumno',
            field=models.ManyToManyField(related_name='alumno', to='repo_web.Persona'),
        ),
        migrations.AddField(
            model_name='curso',
            name='profesor',
            field=models.ManyToManyField(related_name='profesor', to='repo_web.Persona'),
        ),
    ]
