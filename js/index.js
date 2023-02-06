//index

let contenedorJuego = document.querySelector("#contenedorJuego");
//resolver for each inicilización que nos falta el item
const listarJuegos = () => {
  contenedorJuego.innerHTML = "";
  games.forEach((game) => {

    if(game.published){
      let tarjetaJuego = document.createElement("div");
      tarjetaJuego.className = "game-data d-flex flex-column flex-md-row position-relative";
      let tarjeta = `
      <a href="/pages/games.html?id=${game.id}" id="game-img" style="background-image:url(${game.img})" class="game-img">
      <div class="game-card-overlay p-5 w-100 h-100 d-flex align-items-center justify-content-center flex-column-reverse">
        <h2>${game.title}</h2>
        <p>${game.category}</p>
      </div>
      </a>
      <article class="game-info d-flex flex-column justify-content-around">
        <header class="position-relative">
          <span class="badge rounded-pill text-bg-${game.category.toLowerCase()} mb-5 fs-5" id="featured-badge">${game.category}</span>
          <span class="badge rounded-pill text-bg-warning favorite-badge" id="favorite-button"><i class="bi bi-star${session.favorite?'-fill':''}"></i> Favorite</span>
        </header>
        <main>
          <h2 class="mb-2">${game.title}</h2>
          <p>${game.description}</p>
        </main>
        <footer class="bg-transparent justify-content-end">
          <a href="/pages/games.html?id=${game.id}" class="btn btn-outline-light d-block">View More...</a>
        </footer>
      </article>
      `;
      
      tarjetaJuego.innerHTML = tarjeta;
      contenedorJuego.appendChild(tarjetaJuego);
    }

  });
};
//marcar juego favorito
//load featured game data
const loadFeaturedGame=()=>{
  let featuredCardTitle=document.querySelector('#featured-card-title')

  let featuredViewMoreBtn=document.querySelector('#featured-view-more')
  let featuredTitle=document.querySelector('#featured-title')
  let imgContenedor=document.querySelector('.img-contenedor')
  let featuredImg=document.querySelector('#featured-image')
  let featuredDesc=document.querySelector('#featured-desc')
  let featuredBadge=document.querySelector('#featured-badge')

  featuredViewMoreBtn.href=`/pages/Games.html?id=${featuredGame.id}`
  featuredTitle.innerHTML=featuredGame.title
  featuredImg.src=featuredGame.img
  featuredDesc.innerHTML=featuredGame.description
  switch(featuredGame.category){
    case 'HTML':
    imgContenedor.style.backgroundColor=color.HTML
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
    case 'CSS':
    imgContenedor.style.backgroundColor=color.CSS
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
    case 'JavaScript':
    imgContenedor.style.backgroundColor=color.JavaScript
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()} m-1`
    break
    case 'Java':
    imgContenedor.style.backgroundColor=color.Java
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
    case 'Python':
    imgContenedor.style.backgroundColor=color.Python
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
    case 'C':
    case 'C#':
    case 'C++':
    imgContenedor.style.backgroundColor=color.C
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
    case 'SQL':
    imgContenedor.style.backgroundColor=color.SQL
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
    default:
    imgContenedor.style.backgroundColor=color.Others
    featuredBadge.innerHTML=featuredGame.category
    featuredBadge.classList=`badge rounded-pill text-bg-${featuredGame.category.toLowerCase()}`
    break
  }
}

loadFeaturedGame()
listarJuegos();

