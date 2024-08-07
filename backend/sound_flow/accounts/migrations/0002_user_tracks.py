# Generated by Django 4.2.6 on 2023-11-27 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("music", "0001_initial"),
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="tracks",
            field=models.ManyToManyField(
                to="music.track", verbose_name="Tracks which added by user"
            ),
        ),
    ]
