from django.db import models


class User(models.Model):
    fullname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=50) 
    position = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "fullname='{}', username='{}', password='{}', email='{}', position='{}'".format(self.fullname, self.username, self.password, self.email, self.position)
