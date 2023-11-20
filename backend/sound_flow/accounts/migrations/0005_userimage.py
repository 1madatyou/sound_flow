# Generated by Django 4.2.6 on 2023-11-20 06:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_user_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(null=True, upload_to='user_images', verbose_name='Avatar of user')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='image', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]