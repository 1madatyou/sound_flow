import random

from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings


def generate_code(count_of_chars: int) -> str:
    ''' Generates digital code with given count of chars '''
    interval = (10**(count_of_chars-1), (10**count_of_chars)-1)

    return str(random.randint(*interval))

def send_template_mail(subject: str, recipient_list: list, template_path: str, context: dict, *args, **kwargs,):

    template_as_string = render_to_string(template_path, context)

    send_mail(
        subject=subject,
        message='Code',
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=recipient_list,
        html_message=template_as_string,
        fail_silently=False,
        **kwargs
    )
   