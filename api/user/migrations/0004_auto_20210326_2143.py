# Generated by Django 3.1.6 on 2021-03-26 12:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_auto_20210326_2135'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='stared_exporters',
            new_name='starred_exporters',
        ),
    ]
