/*=========================================
    DIGITAL FORCE V3
    script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        AOS
    =========================================*/

    if (typeof AOS !== "undefined") {

       

    }

    //=========================
// MENÚ MÓVIL
//=========================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(menuToggle && menu){

    menuToggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

    document.querySelectorAll(".menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

        });

    });

}
    /*=========================================
        FAQ
    =========================================*/

    const preguntas = document.querySelectorAll(".faq-item");

    preguntas.forEach(item => {

        const boton = item.querySelector(".faq-pregunta");

        boton.addEventListener("click", () => {

            preguntas.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /*=========================================
        BOTÓN SUBIR
    =========================================*/
const btnTop = document.getElementById("btnTop");

if (btnTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            btnTop.classList.add("show");

        } else {

            btnTop.classList.remove("show");

        }

    });

    btnTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}
    /*=========================================
        NAVBAR SCROLL
    =========================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scroll");

        } else {

            header.classList.remove("scroll");

        }

    });

    /*=========================================
        EFECTO HOVER HERO
    =========================================*/

    const mockup = document.querySelector(".mockup");

    if (mockup) {

        mockup.addEventListener("mousemove", (e) => {

            const rect = mockup.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 12;
            const rotateX = ((y / rect.height) - 0.5) * -12;

            mockup.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;

        });

        mockup.addEventListener("mouseleave", () => {

            mockup.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;

        });

    }

});


//=========================
// EMAILJS
//=========================

emailjs.init("sqzUVIN_X3beKvpM0");

const formulario = document.getElementById("contact-form");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const boton = document.getElementById("btn-enviar");
        const estado = document.getElementById("form-status");

        boton.disabled = true;
        boton.textContent = "Enviando...";

        estado.textContent = "";

        emailjs.send(
            "service_gwi6gin",
            "template_57mbuv8",
            {
                from_name: document.getElementById("from_name").value,
                from_email: document.getElementById("from_email").value,
                message: document.getElementById("message").value
            }
        )

        .then(function () {

            estado.textContent = "✅ ¡Gracias! Tu mensaje fue enviado correctamente. Te responderemos muy pronto.";

            formulario.reset();

        })

        .catch(function (error) {

            console.error("EmailJS:", error);

            estado.textContent = "❌ Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.";

        })

        .finally(function () {

            boton.disabled = false;
            boton.textContent = "Enviar mensaje";

            setTimeout(function () {

                estado.textContent = "";

            }, 5000);

        });

    });

}


//=========================
// AOS
//=========================

AOS.init({

    duration: 1000,

    once: true,

    easing: "ease"

});

//=========================
// BOTÓN TOP
//=========================

const btnTop = document.getElementById("btnTop");

if(btnTop){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btnTop.classList.add("show");

        }else{

            btnTop.classList.remove("show");

        }

    });

    btnTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

//=========================
// CURSOR PREMIUM
//=========================

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

if(cursor && dot){

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left = e.clientX+"px";
        cursor.style.top = e.clientY+"px";

        dot.style.left = e.clientX+"px";
        dot.style.top = e.clientY+"px";

    });

    document.querySelectorAll("a,button,.btn,.btn-outline,.servicio-card,.proyecto").forEach(el=>{

        el.addEventListener("mouseenter",()=>{

            cursor.classList.add("active");

        });

        el.addEventListener("mouseleave",()=>{

            cursor.classList.remove("active");

        });

    });

}

