# Generated by Django 4.0.2 on 2022-03-09 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musicapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('primary_genre', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('sub_genre', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='artist',
            name='year',
            field=models.IntegerField(default=1970),
        ),
    ]
