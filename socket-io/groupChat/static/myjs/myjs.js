$(document).ready(function(){

    //$("#board").children().hide();
    let myName;
    let socket  = io.connect();

    $('#join').click(function(e){
        e.preventDefault();
        socket.emit("new_user", {uName: $('#name').val(), uId: socket.id});
        myName = $('#name').val();
        console.log(myName + " : " + socket.id);
        $('#login').hide();
    })

    $('#send').click(function(e){
        e.preventDefault();
        let uMessage = {
            name: myName,
            msg: $('#uComment').val()
        }
        $("#uComment").val("");
        socket.emit("new_msg", {new_msg: uMessage})
    })

    socket.on("allMsg", function(data){
        for(object of data.allMsgs){
            $('#comments').append("<p>"+ object.name+" : " + object.msg +"</p>")
        }
    })
    socket.on("newMsg", function(data){
        $('#comments').append("<p>"+ data.newMsgs.name+" : " + data.newMsgs.msg +"</p>")
    })
})


