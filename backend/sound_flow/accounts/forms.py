from django import forms

from .models import User


class RegistrationForm(forms.Form):

    password2 = forms.CharField(max_length=255)

    def clean(self):
        cd = self.cleaned_data

        if cd['password'] != cd['password2']:
            raise forms.ValidationError("passwords_mismatch")
        
    class Meta:
        model = User
        fields = ['username', 'email', 'password']