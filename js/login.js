const iconoojo = document.getElementById("icono-ojo");
const password = document.getElementById("password");

const usuario_ingresado = document.querySelector("#usuario_txt");
const contenedor_error = document.querySelector(".div_error");
const error_txt = document.querySelector("#error_txt");
const btn_ingresar = document.querySelector("#btn_iniciar_sesion");


iconoojo.onclick = function(){
    if(password.type == "password")
    {
            password.type = "text";
            iconoojo.src = "images/eyeopen.png"
    }else
        {
            password.type = "password";
            iconoojo.src = "images/eyeclosed.png"
        }
}

let usuario = 
[
    {
        nombre: "Mateo",
        usuario: "masoto",
        pass: "123456789a",
        cvu: "000001549845698",
        dinero_cuenta: 35000,
        alias: "Sapa.termo.tabla.mp"
    },
    {
        nombre: "lucas",
        usuario: "lupaluci",
        pass: "456789154a",
        cvu: "000001549845322",
        dinero_cuenta: 50000,
        alias: "arbol.manzana.cebolla.mp"
    },
    {
        nombre: "aron",
        usuario: "loaron",
        pass: "897522144a",
        cvu: "000001549845566",
        dinero_cuenta: 1200,
        alias: "piedra.tabla.auto.mp"
    }
]
localStorage.setItem("usuarios", JSON.stringify(usuario))
lista_usuarios = JSON.parse(localStorage.getItem("usuarios"))


btn_ingresar.addEventListener("click", function(usuario_ingresado,password)
{
    for(let item of lista_usuarios)
        {
            if (usuario_ingresado == item.usuario && password == item.pass)
            {
                location.href ="inicio.html";
            }
        }
        contenedor_error.classList.toggle("no-ver");
        error_txt.innerHTML = "La contraseña o el nombre de usuario son incorrecto o no existen"
        location.href ="index.html";
})