from django.contrib import admin
from .models import Student, Borrower

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Borrower)
class BorrowerAdmin(admin.ModelAdmin):
    list_display = ('student', 'chromebook_number', 'borrowed_date', 'returned')
    list_filter = ('returned',)
    search_fields = ('student__name', 'chromebook_number')
    list_editable = ('returned',)
