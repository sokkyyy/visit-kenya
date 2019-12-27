# Generated by Django 3.0 on 2019-12-25 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kenya', '0004_auto_20191219_1501'),
    ]

    operations = [
        migrations.AddField(
            model_name='destination',
            name='category',
            field=models.CharField(choices=[('national_parks', 'National Park'), ('beaches', 'Beach'), ('island_resorts', 'Island Resort'), ('cultural_sites', 'Cultural Site')], default='national_parks', max_length=100),
        ),
    ]