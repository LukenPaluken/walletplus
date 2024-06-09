const btn_menu_mobile = document.querySelector("#btn_menu_mobile");
const menu = document.querySelector(".navigation_menu");
let largo_pantalla
btn_menu_mobile.addEventListener("click", function(event)
{
    largo_pantalla = screen.width;
    if (largo_pantalla <= 1200)
    {
        menu.classList.toggle("btn_menu_mobile")
    }
})