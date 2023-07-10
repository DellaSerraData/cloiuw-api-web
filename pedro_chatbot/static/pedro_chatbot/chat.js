$(document).ready(function(){
    $('#message-form').on('submit', function(event){
        event.preventDefault();

        let userMessage = $('#message-input').val();

        if(userMessage){
            $('#user-message').append('<p>' + userMessage + '</p>');
            $('#message-input').val('');  // Limpa o campo de entrada
        }

        $.ajax({
            url: "/chat/chatbot_response/",
            data: {
                'message': userMessage
            },
            dataType: 'json',
            success: function(data){
                $('#bot-message').empty();

                data.forEach(function(msg){
                    $('#bot-message').append('<p>' + msg.text + '</p>');
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("AJAX Error: " + textStatus + ": " + errorThrown);
            }
        });
    });
});
