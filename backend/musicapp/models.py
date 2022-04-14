from django.db import models
from django.core.validators import MaxValueValidator

DEFAULT_GENRE_ID = "Jazz"

class User(models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    password = models.CharField(max_length=255)
    def __str__(self):
        return self.username

class Artist(models.Model):
    song = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    file = models.FileField(upload_to='media',null = True, default = None, blank = True )
    def __str__(self):
        return self.song + ", by: " + self.artist

class Rating(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Artist, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MaxValueValidator(5)])
    def __str__(self):
        return self.username.username + " rating " + self.song.song + " as " + str(self.rating)