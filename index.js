/* const contenedor= document.getElementById("contenedorGeneral")

let botonLambo= document.getElementsByClassName("btn-lamborghini");
let botonMercedes= document.getElementById("btn-mercedes");
let botonVolkswagen= document.getElementById("btn-volkswagen");
let botonPorsche= document.getElementById("btn-porsche"); */

/* function agregarLambo() {
    let contenedorLambo = document.createElement("li")
    contenedorLambo.innerHTML = `<li class="nav-item">
    <p class="nav-link">Lamborghini Aventador, Price: 110usd</p>
    </li>`;
contenedor.appendChild(contenedorLambo);
};

botonLambo.addEventListener("click", agregarLambo); */

const autos= [
{
    id: 1,
    nombre: "Lamborghini Aventador",
    precio: 110,
    img: "./img/lamborghini.png"
},
{
    id: 2,
    nombre: "Mercedes AMG GTR",
    precio: 90,
    img: "../img/mercedes.png"
},
{
    id: 3,
    nombre: "Volkswagen Golf R",
    precio: 80,
    img: "../img/volkswagen.png"
},
{
    id: 4,
    nombre: "Porsche GT3RS",
    precio: 100,
    img: "../img/porsche.png"
},
];

const contenedorAutos= document.querySelector("#contenedorAutos")

function crearCards(){
    autos.forEach((auto) => {
        let contenedorAuto = document.createElement("div")
        contenedorAuto.innerHTML = `<div class="card cards-vw mx-auto col-sm-12 col-md-2 col-lg-2">
        <img class="rounded" src="${auto.img}"
          <div class="card-body">
            <h3 class="card-text">${auto.nombre}</h3> 
            <p class="card-text">Price: ${auto.precio}usd</p> 
            <a class="card-text" id="btn-${auto.id}" href="#">Add to the cart.</a>
          </div>
      </div> `
    

        contenedorAutos.appendChild(contenedorAuto)
    })
}

crearCards()



