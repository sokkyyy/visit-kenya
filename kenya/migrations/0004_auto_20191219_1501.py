# Generated by Django 3.0 on 2019-12-19 12:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kenya', '0003_auto_20191219_1414'),
    ]

    operations = [
        migrations.RenameField(
            model_name='destination',
            old_name='longitute',
            new_name='longitude',
        ),
    ]
