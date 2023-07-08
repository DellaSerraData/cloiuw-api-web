from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.chat_view, name='chat'), # URL do Front.
    path('chatbot_response/', views.chatbot_response, name='chatbot_response'), # URL da api
]
