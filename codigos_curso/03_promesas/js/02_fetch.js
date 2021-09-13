let url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal";
let urlSpain =
  "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
let contenedorCartas = document.querySelector('.card-group')
  fetch(urlSpain)
  .then(
    (result) => {
      return result.json();
      //te da el resultado pendiente
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    //tratas el restultado pendiente
    (data) => {
      let equipos = console.log(data.teams);
      equipos.forEach((element) => {
        //agregarla al nodo card-group
        /*<div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div> */
    let descripcion = element.strDescriptionES
    if(descripcion==null){
        descripcion = "No disponible"
    }
        contenedorCartas.innerHTML =
         contenedorCartas.innerHTML +
          `<div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strAlternate}</h5>
          <p class="card-text">${element.strDescriptionES}</p>
          <p class="card-text"><small class="text-muted">${element.strTeamBadge}</small></p>
        </div>
      </div>`;
        /* console.log(element.strAlternate);
        console.log(element.strDescriptionES);
        console.log(element.strTeamBadge); */
      });
    },
    (err) => {
      console.log("Erroe en el paso a json");
    }
    //te da el resultado tratado
  )
  .catch((err) => console.log("Error general"));
