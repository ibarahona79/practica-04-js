(() => {


    //const denunciaBtn = document.getElementById("denuncias");
    const enviarBtn = document.getElementById("enviar");
    const usuariohtml = document.getElementById("usuario");
    const passworhtml = document-getElementById("password");


    enviarBtn.addEventListener("click", (evento) => {
    if(usuariohtml.value != " " && passworhtml.value != " ")
        {
            alert("Bienvenido" + usuariohtml.value, + " ingresado");
        }
        else{
            alert("Ingrese los datos porfa");
        }

    })

 

}) ();

 /*    let objeto = {
        nombre: "Otoniel",
        email: "oaguirre@trabajo.gob.hn",
        saludar: (saludo) => {
            console.log("Hola" + saludo);
        }
    }

    console.log(objeto);
    console.log(objeto.saludar("PERROS")) */