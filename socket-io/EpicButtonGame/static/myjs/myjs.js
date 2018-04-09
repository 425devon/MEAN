$(document).ready(function(){
    let socket  = io.connect();
    let localCount;
    socket.on('count', function(data){
        console.log("The count is " + data.curCount);
        localCount = data.curCount;
        $("#lc").html(localCount);
    })
    // socket.on('reset_count', function(data){
    //     localCount = data.curCount;
    //     $("#lc").html(localCount);
    // })
    $('#epic').click(function(){
        socket.emit('clicked');
    })
    $('#reset').click(function(){
        socket.emit('reset');
    })
})