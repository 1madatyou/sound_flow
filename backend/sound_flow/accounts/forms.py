from django import forms

from .models import User


class LoginForm(forms.Form):

    def clean(self):

        cd = self.cleaned_data
        
        try :
            user = User.objects.get(email=cd['email'])
            self.user_id = user.id 
        except User.DoesNotExist:
            raise forms.ValidationError("User doesn't exist")

    class Meta:
        Model = 'accounts.User'
        fields = ["email, password"]