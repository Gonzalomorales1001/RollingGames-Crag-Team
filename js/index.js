//index

let contenedor = document.querySelector("#contenedorJuego");
//resolver for each inicilización que nos falta el item
const listarJuegos = () => {
  contenedor.innerHTML = "";
  games.forEach((game) => {
    let tarjetaJuego = document.createElement("div");
    tarjetaJuego.className = "card tarjetaJuego my-4";
    let tarjeta = ` <div class="row">
    <div class="col-md-4">
    <img  alt="${game.title}" class="img-fluid imagenJuego" src="${game.img}">
    <span class="badge rounded-pill text-bg-success mb-2 lenguajeJuego">${game.category}</span>
  </div>
  <div class="col-md-8">
    <h2 class="card-title mt-3 tituloJuego">${game.title} </h2>
    <p class="descripcionJuego"> ${game.description}</p>
    <a href="/pages/Games.html?id=${game.id}">
    <button class="btn btn-success"> read more </button>

    </a>

  </  div>`;

    tarjetaJuego.innerHTML = tarjeta;
    contenedor.appendChild(tarjetaJuego);
  });
};
//marcar juego favorito
//load featured game data
const loadFeaturedGame=()=>{
  let featuredViewMoreBtn=document.querySelector('#featured-view-more')
  let featuredTitle=document.querySelector('#featured-title')
  let imgContenedor=document.querySelector('.img-contenedor')
  let featuredImg=document.querySelector('#featured-image')
  // let featuredCategory=document.querySelector('')
  let featuredDesc=document.querySelector('#featured-desc')

  featuredViewMoreBtn.href=`/pages/Games.html?id=${featuredGame.id}`
  featuredTitle.innerHTML=featuredGame.title
  featuredImg.src=featuredGame.img
  featuredDesc.innerHTML=featuredGame.description
  switch(featuredGame.category){
    case 'HTML':
    imgContenedor.style.backgroundColor=color.HTML
    break
    case 'CSS':
    imgContenedor.style.backgroundColor=color.CSS
    break
    case 'JavaScript':
    imgContenedor.style.backgroundColor=color.JavaScript
    break
    case 'Java':
    imgContenedor.style.backgroundColor=color.Java
    break
    case 'Python':
    imgContenedor.style.backgroundColor=color.Python
    break
    case 'C':
    case 'C#':
    case 'C++':
    imgContenedor.style.backgroundColor=color.C
    break
    case 'SQL':
    imgContenedor.style.backgroundColor=color.SQL
    break
    default:
    imgContenedor.style.backgroundColor=color.Others
    break
  }
}

loadFeaturedGame()
listarJuegos();

