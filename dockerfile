# Use uma imagem oficial do Python 3.9 como base
FROM python:3.9

# Definindo o diretório de trabalho para /app
WORKDIR /app

# Atualizando o pip
RUN pip install --upgrade pip

# Copiando o arquivo de requisitos e instalando os requisitos
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copiando o restante dos arquivos do diretório atual do host para o diretório de trabalho no container
COPY . .

# Fazendo a porta 8000 disponível para o mundo fora do container
EXPOSE 8000

# Rodando o comando para iniciar o servidor quando o container Docker iniciar
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
