# Generated by Django 4.0.2 on 2022-04-04 23:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('musicapp', '0005_artist_album'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='artist',
            name='genre',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='year',
        ),
        migrations.DeleteModel(
            name='Genre',
        ),
    ]