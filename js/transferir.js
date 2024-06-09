const btn_transferir = document.querySelector("#btn_transferir");
const input_alias = document.querySelector("#input_alias_txt");
const input_monto = document.querySelector("#input_monto_txt");
const dinero_mostrar = document.querySelector(".dinero_mostrar");


lista_usuarios = JSON.parse(localStorage.getItem("usuarios"))



btn_transferir.addEventListener("click", function()
    {
        if(validar_alias(input_alias.value))
        {
            obj = validar_alias(input_alias.value);
            transferir_dinero(obj["dinero_cuenta"], obj,input_monto.value)
        }
    }
)


function mostrar_dinero(usuario_ingresado,pass_ingresada)
{
    if(login(usuario_ingresado,pass_ingresada))
    {
        //console.log(login(usuario_ingresado,pass_ingresada))
    }
    return false, 0
}
let dinero_total = mostrar_dinero("lupaluci", "456789154a")

dinero_mostrar.innerHTML = "$"+dinero_total+" ";

const fecha = new Date();

const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ];

function transferir_dinero(dinero_transferir, obj_usuario, dinero_actual_usuario)
{
    if(dinero_actual_usuario >= dinero_transferir)
    {
        
    }
}


function validar_alias(alias)
{
    for (let item of lista_usuarios)
    {
        if (item.alias == alias)
        {
            return true, item
        }
    }
    return false
}



function depositar_dinero(cvu, alias, dinero_depositar)
{
    //validar cvu o alias
    //usuario encontrado por alias
    //transferir_dinero(dinero_depositar, dinero_actual_usuario)

}