# Generated by Django 4.0.2 on 2022-03-09 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musicapp', '0002_genre_artist_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='genre',
            name='primary_genre',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='genre',
            name='sub_genre',
            field=models.CharField(max_length=255, primary_key=True, serialize=False),
        ),
    ]
