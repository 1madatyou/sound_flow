# Generated by Django 4.2.6 on 2023-11-27 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("music", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="track",
            name="image",
            field=models.FileField(null=True, upload_to=""),
        ),
    ]
