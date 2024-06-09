
const tabla_actividades = document.querySelector(".tabla_actividades");
function crear_actividad(usuario, monto, dia, positivo)
{
    let a_fila = document.createElement('a');
    let fila = document.createElement("tr");
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let img_transferencia = document.createElement("img");
    img_transferencia.src = "../images/incognito.png"

    celda1.classList.add("img")
    celda1.appendChild(img_transferencia)
    fila.appendChild(celda1)
    
    let b_texto_actividad = document.createElement("b")
    let p_texto_enviado = document.createElement("p")

    let b_monto_enviado = document.createElement("b")
    let p_dia_enviado = document.createElement("p")

    p_texto_enviado.innerHTML = "a "+usuario
    
    if(positivo)
        {
            b_monto_enviado.innerHTML = "+$"+monto
            b_texto_actividad.innerHTML= "Transferencia recibida";
        }else
            {
                b_monto_enviado.innerHTML = "-$"+monto
                b_texto_actividad.innerHTML= "Transferencia envida";
            }   
    celda2.classList.add("estado")
    celda2.appendChild(b_texto_actividad)
    celda2.appendChild(p_texto_enviado)
    
    fila.appendChild(celda2)

  
    p_dia_enviado.innerHTML= dia;
    celda3.classList.add("monto")
    celda3.appendChild(b_monto_enviado)
    celda3.appendChild(p_dia_enviado)

    fila.appendChild(celda3)

    a_fila.appendChild(fila)
    a_fila.href = "#"
    tabla_actividades.appendChild(a_fila)
    
}
crear_actividad("Lucas Paluci", 12000, "ayer", false)
crear_actividad("Lucas Paluci", 500, "ayer", true)
crear_actividad("Lucas Paluci", 1850, "ayer", false)
crear_actividad("Lucas Paluci", 7500, "ayer", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)
crear_actividad("Mateo Soto", 12000, "Martes", true)

