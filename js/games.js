const parametroPaginaPrincipal= new URLSearchParams(location.search)
const idProducto=parametroPaginaPrincipal.get("id")

let contenedor=document.querySelector("#contenedor")
let productos= JSON.parse(localStorage.getItem("productos"))||[]




const traerDatosJuegos=()=>{
//encontrar el producto
//si existe crear la tarjeta
//si no existe mostramos un mensaje
let infojuego=productos.find(item=>item.id===idProducto)
if(infojuego){
    let col = document.createElement("div");
    col.classList = "col";
    let tarjeta = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${infojuego.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${infojuego.title}</h5>
          <p class="card-text">${infojuego.description}</p>
          <p class="card-text"><small class="text-muted">Precio: $${producto.price}</small></p>
        </div>
      </div>
    </div>
  </div>`;

    col.innerHTML = tarjeta;
    contenedor.append(col);
}else{
    console.warn("NO ENCONTRAMOS EL JUEGO QUE BUSCAS")
}
}
traerDatosJuegos()

