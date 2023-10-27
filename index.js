const form = document.getElementById("form")

form.addEventListener("submit", (e) => {crearUsuario(e)})

function crearUsuario(e){
    e.preventDefault()
    
    let formNombre = document.getElementById("nombre")
    let formApellido = document.getElementById("apellido")
    let formEdad = document.getElementById("edad")
    let formEmail = document.getElementById("email")

    const usuario = {
        nombre: formNombre.value,
        apellido: formApellido.value,
        edad: formEdad.value,
        email: formEmail.value,
    }

    console.log(usuario)
    localStorage.setItem("user", JSON.stringify(usuario))
    form.reset()
}

const autos= [
{
    id: 1,
    nombre: "Lamborghini Aventador",
    precio: 120,
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
    precio: 70,
    img: "../img/volkswagen.png"
},
{
    id: 4,
    nombre: "Porsche GT3RS",
    precio: 110,
    img: "../img/porsche.png"
},
{
    id: 5,
    nombre: "Audi R8",
    precio: 100,
    img: "../img/audir8.png"
},
{
    id: 6,
    nombre: "BMW M4",
    precio: 80,
    img: "../img/m4.png"
}
];

const contenedorAutos= document.querySelector("#contenedorAutos");

function crearCards(){
    autos.forEach((auto) => {
        let contenedorAuto = document.createElement("div")
        contenedorAuto.innerHTML = `<div class="card cards-vw mx-auto col-sm-12 col-md-2 col-lg-2">
        <img class="rounded" src="${auto.img}"
          <div class="card-body">
            <h3 class="card-text">${auto.nombre}</h3> 
            <p class="card-text">Price: ${auto.precio} USD</p> 
            <a class="card-text card-btn rounded" id="btn-${auto.id}" href="#">ADD TO CART</a>
          </div>
      </div> `
    

        contenedorAutos.appendChild(contenedorAuto)
    })
};

crearCards();

const contenedorCarrito= document.querySelector("#contenedorCarrito");

const btnLambo = document.getElementById("btn-1")

btnLambo.addEventListener("click", agregarACarrito)

function agregarACarrito(){
    let contenedorLambo = document.createElement("li")
    contenedorLambo.innerHTML = `<li class="nav-item">
    <p class="nav-link">Lamborghini Aventador, Precio: 110 USD.</p>
    </li>`;
contenedorCarrito.appendChild(contenedorLambo)
};


