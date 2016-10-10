window.addEventListener("load", function(){
    var contenedorDeConversacion = document.getElementById("conversacion");
    var contenedorDeChat = document.getElementById("chat");
    var mensajes = document.getElementById("mensajes");
    
});

    
    function enviarMensaje(){
        var horaActual=time();
        var divMensaje = document.createElement("div");
        var parrafo = document.createElement("p");
        var horaPub = document.createElement("div")

        divMensaje.setAtribute("id", "divMensaje");

        contenedorDechat.appendChild("mensajeEnviado")

        var parrafo = this.parentElement.children[13].value;
        var mensajeEnviado = mensajes.value;

        horaPub.innerHTML = horaPub;
        
    };

    function inicializarEventos(){
            addEventListener(mensajes,'keypress',enter,false);
        }


    function enter(e){
        if (window.event){
            if (window.event.keyCode == 13)
            {enviarMensaje()}
          };
        };


    function time(){
        var tiempo = new Date();
        var h = tiempo.getHours();
        var m = tiempo.getMinutes();
        var horaPub= h+":"+m;
        return horaPub;
}