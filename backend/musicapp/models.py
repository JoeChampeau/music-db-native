from django.db import models
from django.core.validators import MaxValueValidator

class User(models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    password = models.CharField(max_length=255)
    def __str__(self):
        return self.username

class Artist(models.Model):
    song = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    def __str__(self):
        return self.song + ", by: " + self.artist

class Rating(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Artist, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MaxValueValidator(5)])
    def __str__(self):
        return self.username.username + " rating " + self.song.song + " as " + str(self.rating)