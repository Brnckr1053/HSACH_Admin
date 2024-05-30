import csv
from django.core.management.base import BaseCommand
from loaner.models import Student

class Command(BaseCommand):
    help = 'Import students from student.csv'

    def handle(self, *args, **kwargs):
        with open('student.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                Student.objects.get_or_create(name=row['name'])
        self.stdout.write(self.style.SUCCESS('Successfully imported students'))
