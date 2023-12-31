from django.shortcuts import render
from django.http import JsonResponse
from .forms import ChatForm

import requests


def chat_view(request):
    # Função para renderizar o front end.
    form = ChatForm()
    return render(request, 'pedro_chatbot/chat.html', {'form': form})

def chatbot_response(request):
    # Pega a mensagem do usuário do request
    message = request.GET.get('message')
    
    # Configura o endpoint e o payload da API RASA
    RASA_API_URL = 'http://<rasa_server>:<rasa_port>/webhooks/rest/webhook'
    payload = {"message": message, "sender": "user"}
    
    # Faz uma requisição POST para a API RASA
    response = requests.post(RASA_API_URL, json=payload)
    
    # Pega a resposta da API RASA
    rasa_response = response.json()
    
    # Retorna a resposta para o usuário
    return JsonResponse(rasa_response, safe=False)