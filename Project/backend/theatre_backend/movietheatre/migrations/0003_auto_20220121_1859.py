# Generated by Django 3.2.8 on 2022-01-21 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movietheatre', '0002_auto_20220121_1620'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movies',
            name='category',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='movies',
            name='discription',
            field=models.TextField(blank=True, null=True),
        ),
    ]