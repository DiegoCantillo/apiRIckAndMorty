const cards = document.querySelector(".grilla")
const paginators = document.getElementById("paginator");


const API = `https://rickandmortyapi.com/api/character`

const getData = (apiUrl)=>{
  return fetch(apiUrl)
       .then(response =>  response.json())
       .then(json =>{ allData(json),
            printPaginator(json.info)})
                      
       .catch(error => {console.log(`error: `, error) })
} 


  let allData = (datas) =>{
  let html = "";
  let getUser = datas.results;
  getUser.forEach(user => {
    html += `
    <div class="hpCard">
      <div class="imgContainer">
      <img src= ${user.image} alt="hp-character">
      </div>
      <h4>${user.name}.</h4>
      <h4>${user.species}.</h4>
      <h4>${user.status}.</h4>
    </div>`
  });
  cards.innerHTML = html;
}

const printPaginator = (infoPaginator) =>{

  let html = `<div class="page-item prev" onclick= "getData('${infoPaginator.prev}')"> < Previus </div>`
  html += `<div class="page-item next" onclick= "getData('${infoPaginator.next}')">Next ></div>`
  paginators.innerHTML = html;

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  if(infoPaginator.prev == null){
    prev.style.display = "none";
  }else if(infoPaginator.next == null){
    next.style.display = "none";
  }

}

getData(API)






