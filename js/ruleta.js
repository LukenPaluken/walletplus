const apuesta_input_text = document.querySelector("#input_apuestas");
const btns = document.getElementsByClassName("boton-ruleta");
const btn_apostar = document.querySelector("#enviar_apuestas");
const monto_jugable = document.querySelector("#monto_total_jugable");
const estado_ruleta = document.querySelector("#titulo_estado_ruleta");
const ruleta = document.querySelector("#ruleta_img");
const text_ganador = document.querySelector("#text_ganador");
const numero_ingresado = document.querySelector("#input_numero");
const tabla_actividades = document.querySelector(".tabla_actividades");

function validar_numero(num) {
  num_casteado = parseInt(num, 10);
  if (num_casteado >= 1 && num_casteado <= 36) {
    return true;
  }
  return false;
}
text_ganador.style.visibility = "hidden";
function getRandomNumber() {
  return Math.floor(Math.random() * 37); // 37 porque Math.random() genera un número entre 0 y 1, excluyendo 1
}

function validar_monto_jugable(monto_ingresado) {
  monto_casteado = parseInt(monto_ingresado, 10);
  monto_total_casteado = parseInt(monto_jugable.innerHTML.split("$")[1], 10);
  if (monto_casteado <= monto_total_casteado && monto_casteado > 0) {
    return true;
  }
  return false;
}

btn_apostar.addEventListener("click", function () {
  valor_input_numero = numero_ingresado.value;
  valor_input_apuesta = apuesta_input_text.value;
  text_ganador.style.visibility = "visible";
  if (validar_numero(valor_input_numero) == true) {
    if (validar_monto_jugable(valor_input_apuesta) == true) {
      crear_actividad(valor_input_apuesta, valor_input_numero)
      ruleta.style.animation = "rotate 1s linear infinite";
      numero_random = getRandomNumber();
      setTimeout(() => {
        ruleta.style.animation = "none";
        
        if (numero_random == valor_input_numero) {
          monto_jugable.innerHTML = "$"+(parseInt(monto_jugable.innerHTML.split("$")[1], 10) + valor_input_numero * 2)
          text_ganador.innerHTML = `Gano, el numero ganador fue: ${numero_random} usted aposto al: ${valor_input_numero}`
        } else {
          monto_jugable.innerHTML = "$"+(parseInt(monto_jugable.innerHTML.split("$")[1], 10) - valor_input_apuesta)
          text_ganador.innerHTML = `Perdio, el numero ganador fue: ${numero_random} usted aposto al: ${valor_input_numero}`
        }
      }, 5000);
      apuesta_input_text.value = ""
      numero_ingresado.value = ""
    }else{
      text_ganador.innerHTML = "El monto apostado supera el monto maximo disponible"
    }
  } else {
    text_ganador.innerHTML = "El numero ingresado tiene que estar entre el 0 y el 36"
  }
});

function crear_actividad(apuesta, num_apostado)
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

    p_texto_enviado.innerHTML = "$"+apuesta
    b_texto_actividad.innerHTML = "Ha apostado: "
    
    b_monto_enviado.innerHTML = "Ha jugado al: "
    p_dia_enviado.innerHTML = "numero: "+num_apostado

    celda2.classList.add("estado")
    celda2.appendChild(b_texto_actividad)
    celda2.appendChild(p_texto_enviado)


    
    fila.appendChild(celda2)

  
    celda3.classList.add("monto")
    celda3.appendChild(b_monto_enviado)
    celda3.appendChild(p_dia_enviado)

    fila.appendChild(celda3)

    a_fila.appendChild(fila)
    a_fila.href = "#"
    tabla_actividades.appendChild(a_fila)
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let valor_apuesta = btns[i].value.split("$");
    apuesta_input_text.value =
      parseInt(apuesta_input_text.value, 10) + parseInt(valor_apuesta[1], 10);
  });
}
