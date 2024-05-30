from django import forms
from .models import Student, Borrower

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name']

class BorrowerForm(forms.ModelForm):
    class Meta:
        model = Borrower
        fields = ['student', 'chromebook_number']
