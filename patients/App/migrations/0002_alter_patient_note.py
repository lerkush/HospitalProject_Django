# Generated by Django 3.2.11 on 2022-10-05 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='note',
            field=models.TextField(blank=True),
        ),
    ]
