# Generated by Django 4.2.13 on 2024-05-29 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loaner', '0002_remove_student_chromebook_number_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='borrower',
            name='returned',
            field=models.BooleanField(default=False),
        ),
    ]