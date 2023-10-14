const pantalla = document.querySelector(".Pantalla");
const botones = document.querySelectorAll(".Boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;

        if (boton.id === "Limpiar") {
            pantalla.textContent = "0";
            return
        }

        if (boton.id === "Borrar") {
            if (pantalla.textContent.length === 1 ) {
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        
        if (boton.id === "Igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "¡¡ERROR!!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡¡ERROR!!") {
            pantalla.textContent = botonOn;
        } else {
        pantalla.textContent += botonOn;
        }



    })

})
  