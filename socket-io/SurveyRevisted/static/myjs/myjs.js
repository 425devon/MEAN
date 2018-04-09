$(document).ready(function(){
    let socket  = io.connect();
    $('#submit').click(function(e){
        let formData = {
            name: $('#name').val(),
            location: $('#location').val(),
            language: $('#language').val(),
            comment: $('#comment').val()
        }
        socket.emit("posting_form", {form: formData})
        console.log(formData);
        e.preventDefault();
    });
    socket.on( 'server_response', function (data){
        console.log( 'The server says: '  + data.response);
        $('#results').append("<p>You emitted the following information to the server: <p>")
        $('#results').append("<p>"+JSON.stringify(data.response)+"</p>");
        socket.on('lucky_number', function(data){
            $('#results').append("<p>Your lucky number emitted by the server is "+ data.number +"</p>")
        })
        $('form')[0].reset();
    });
})