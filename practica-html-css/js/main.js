(() => {


    const enviarBtn = document.getElementById("enviar");

    const usuariohtml = document.getElementById("usuario");
    
    const passworhtml = document.getElementById("password");


    enviarBtn.addEventListener("click", (evento) => {
    if(usuariohtml.value != " " && passworhtml.value != " ")
        {
            alert("Bienvenido" + usuariohtml.value, + " ingresado");
        }
        else{
            alert("Debe ingresar todos los datos para ingresar");
        }

    })

 

}) ();
