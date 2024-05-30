from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Borrower(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    chromebook_number = models.CharField(max_length=255)
    borrowed_date = models.DateTimeField(auto_now_add=True)
    returned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.student.name} - {self.chromebook_number}"
