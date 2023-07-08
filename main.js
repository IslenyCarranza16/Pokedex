
const API = 'https://pokeapi.co/api/v2/pokemon/';
/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f6646ded9mshb16b3615a6407a5p12b1ddjsn2d4a4ea5418c',
		'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
	}
}; */



function fecthPokemon(){
const promises = [];
for (let i = 1; i <= 500; i++){
 promises.push( fetch(`${API}${i}`).then(response =>response.json())
 );
}
Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
        id: result.id,
        name: result.name,
        image: result.sprites.other.home.front_default,
        type: result.types.map((type) => type.type.name).join(', '),
        abilities: result.abilities.map((objeto)=>objeto.ability.name).join(', '),
        height: result.height,
        weight: result.weight,
        moves: result.moves.map((objeto)=>objeto.move.name).slice(0,3).join(', '),
        namefilter: result.name.toLowerCase()
    }));
  console.log(pokemon);

  displayPokemon(pokemon)
 

  filtroName.addEventListener('submit',filtrarNombre);

  function filtrarNombre(event){
    event.preventDefault();
    
 const nombreFiltrado = filtroName.nombre.value.toLowerCase();

 const pokemonesFiltrados = pokemon.filter((poke) =>
 poke.namefilter.includes(nombreFiltrado)
);
console.log(pokemonesFiltrados)

 if(pokemonesFiltrados.length>0){
    nombrePokemon.innerText = `Name : ${pokemonesFiltrados[0].name}`;
  tipoPokemon.innerText = `Type: ${pokemonesFiltrados[0].type}`;
  currentOptionImage.style.backgroundImage = "url(" + pokemonesFiltrados[0].image + ")";
  mainMenu.style.background = color_options[0];
  altura.innerHTML = `Height: ${pokemonesFiltrados[0].height}`;
  peso.innerHTML = `Height: ${pokemonesFiltrados[0].weight}`;
  movimientos.innerHTML = `Height: ${pokemonesFiltrados[0].moves}`;
  habilidades.innerHTML = `Height: ${pokemonesFiltrados[0].abilities}`;
  filtroName.reset()
 }
 else
{
    alert("vuelva intentarlo")
    filtroName.reset()
 }

 
  }


  

});

};

fecthPokemon();

function displayPokemon(pokemon){

  nombrePokemon.innerText = `Name : ${pokemon[j].name}`;
  tipoPokemon.innerText = `Type: ${pokemon[j].type}`;
  currentOptionImage.style.backgroundImage = "url(" + pokemon[j].image + ")";
  mainMenu.style.background = color_options[j];
  altura.innerHTML = `Height: ${pokemon[j].height}`;
  peso.innerHTML = `Height: ${pokemon[j].weight}`;
  movimientos.innerHTML = `Height: ${pokemon[j].moves}`;
  habilidades.innerHTML = `Height: ${pokemon[j].abilities}`;



  optionNext.onclick = function () {
    j = j + 1;
    j = j % pokemon.length;
    nombrePokemon.dataset.nextText = pokemon[j].name;
  
    tipoPokemon.dataset.nextText = pokemon[j].type;
  
    mainMenu.style.background = color_options[j];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + pokemon[j].image + ")";
    }, 455);
    
    setTimeout(() => {
    nombrePokemon.innerHTML = `Name : ${pokemon[j].name}`;
  tipoPokemon.innerHTML = `Type: ${pokemon[j].type}`;
      carousel.classList.remove("anim-next");
      altura.innerHTML = `Height: ${pokemon[j].height}`;
      peso.innerHTML = `Height: ${pokemon[j].weight}`;
      movimientos.innerHTML = `Height: ${pokemon[j].moves}`;
      habilidades.innerHTML = `Height: ${pokemon[j].abilities}`;
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (j === 0) {
      j =  pokemon.length;
    }
    j = j - 1;
    nombrePokemon.dataset.previousText = pokemon[j].name;
  
    tipoPokemon.dataset.previousText = pokemon[j].type;
  
    mainMenu.style.background = color_options[j];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + pokemon[j].image + ")";
    }, 455);
    
    setTimeout(() => {
        nombrePokemon.innerHTML = `Name : ${pokemon[j].name}`;
        tipoPokemon.innerHTML = `Type: ${pokemon[j].type}`;
      carousel.classList.remove("anim-previous");
      altura.innerHTML = `Height: ${pokemon[j].height}`;
      peso.innerHTML = `Height: ${pokemon[j].weight}`;
      movimientos.innerHTML = `Height: ${pokemon[j].moves}`;
      habilidades.innerHTML = `Height: ${pokemon[j].abilities}`;
    }, 650);
  };
}

let color_options = [];
while (color_options.length < 900) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (color_options.indexOf(color) >= 0);
    color_options.push("#" + ("000000" + color.toString(16)).slice(-6));
}
console.log(color_options);

/* const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1","#f9d9f6","#fabada","#fd7ed2","#2b3c37","#0e1c1a","#c97c41","#62d0b3","#97f6b6","#e5e400","#fea000",
"#fcfbff","#fcf6ff","#fef1ff","#ffedfc","#ffeaf8","#EBB9D2","#51702e","#97695a","#d0746a","#e1c0d5","#bb9e72","#ffb096","#f4ab85","#a88f57","#b76e72","#ca74a4","#669d31","#878c8f","#16e8be","#fefefe","#e39ade","#bec2a4","#e4c8c0","#d42d9c","#871161","#291f0d"];
console.log(color_options.length) */
  
  
  
  
  
  
  var j = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  const nombrePokemon = document.getElementById("nombrePokemon")
  const tipoPokemon = document.getElementById("tipoPokemon")
  const altura= document.getElementById("altura");
  const peso= document.getElementById("peso");
  const movimientos= document.getElementById("movimientos");
  const habilidades= document.getElementById("habilidades");
  const modal= document.querySelector(".modal")

  const filtroName = document.getElementById("filtroNombre");



 


 /*  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
   */