/*==========================
        ANIMACIONES
==========================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".review-card,.trust-box,.hero-right img").forEach(el=>{
    observer.observe(el);
});


/*==========================
    BOTÓN PRINCIPAL
==========================*/

const btn = document.querySelector(".btn-red");

setInterval(()=>{

    btn.classList.add("pulse");

    setTimeout(()=>{

        btn.classList.remove("pulse");

    },800);

},4000);


/*==========================
      WHATSAPP
==========================*/

const whatsapp=document.querySelector(".whatsapp");

const numero="573106205905"; // ← CAMBIA ESTE NÚMERO

const mensaje="Hola, vi la promoción de Triple Play y deseo recibir más información.";

const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

whatsapp.href=url;

document.querySelector(".btn-white").href=url;


/*==========================
      AÑO AUTOMÁTICO
==========================*/

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}