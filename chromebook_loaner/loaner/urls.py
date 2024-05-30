from django.urls import path
from . import views

urlpatterns = [
    path('', views.student_list, name='student_list'),
    path('new/', views.student_form, name='student_form'),
    path('api/students/', views.get_student_names, name='get_student_names'),
]
