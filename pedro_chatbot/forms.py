from django import forms

class ChatForm(forms.Form):
    message = forms.CharField(label='Digite uma mensagem:', widget=forms.Textarea)
