$(document).ready(function(){
    $('#chatForm').on('submit', function(event){
        event.preventDefault();

        $.ajax({
            url: "/chat/chatbot_response/",
            data: {
                'message': $('#id_message').val()
            },
            dataType: 'json',
            success: function(data){
                data.forEach(function(msg){
                    $('#chatBox').append('<p><b>Bot:</b> ' + msg.text + '</p>');
                });
                $('#id_message').val('');
            }
        });
    });
});
