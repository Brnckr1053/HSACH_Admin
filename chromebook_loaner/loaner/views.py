from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import StudentForm, BorrowerForm
from .models import Student, Borrower

def student_list(request):
    borrowers = Borrower.objects.select_related('student').all()
    return render(request, 'loaner/student_list.html', {'borrowers': borrowers})

def student_form(request):
    students = Student.objects.all()
    if request.method == "POST":
        form = BorrowerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = BorrowerForm()
    return render(request, 'loaner/student_form.html', {'form': form, 'students': students})

def get_student_names(request):
    students = Student.objects.values_list('name', flat=True)
    return JsonResponse(list(students), safe=False)
