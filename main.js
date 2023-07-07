// instalado el paquete de fecth


//import fetch from 'node-fetch';  //esto no es necesario desde el browse

const imagen = 'official-artwork';

const arrayGeneral = {};
const arrayDetalle = {};
const contenedorCarrusel = document.querySelector('#contenedorCarrusel');


const API = 'https://pokeapi.co/api/v2/pokemon/905';
/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f6646ded9mshb16b3615a6407a5p12b1ddjsn2d4a4ea5418c',
		'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
	}
}; */




async function fecthData (urlAPI){

   
    const response = await fetch(urlAPI); 
    const data= await response.json(); //  esto es lo que se ponìa en el .then  lo que va hacer de retornar datos
    return data
}

const anotherfunction = async(urlAPI)=>{
    try{
    const datosTotales = await fecthData(urlAPI); // para sacar datos totales
    const nombrePokemon = await datosTotales.name; // para sacar nombre del pokemon ok
    const tipoPokemon = await datosTotales.types.map((objeto)=>objeto.type.name).join(' '); // tipo de pokemon ok
    const habilidadesPokemon = await datosTotales.abilities.map((objeto)=>objeto.ability.name).join(' - ') //habilidades pokemon
    const altura = await datosTotales.height; // sacar la altura 
    const peso = await datosTotales.weight; // sacar el peso
    const movimientosPokemon = await datosTotales.moves.map((objeto)=>objeto.move.name).slice(0,3).join(' - '); // sacar movimientos los tres princiaples
    
    const imagenPokemon = await datosTotales.sprites.other.home.front_default; // obtener imagen ok

   contenedorCarrusel.innerHTML=" ";
   contenedorCarrusel.innerHTML =
   `<div id="carouselExample" class="carousel slide carrusel">
   <div class="carousel-inner">
     <div id ="containerdelaImagen" class="carousel-item active contenedorimagen">
       <img id="fondopokemon0" src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="nombrePokemon"> 
       <img id="fondopokemon" src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png" alt="nombrePokemon"> 
       <img id="imagenPokemonitem" src='${imagenPokemon}' alt="${nombrePokemon}" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
       <div class="carousel-caption  d-md-block" id="leyendaprincipal">
           <h5 id="nombrePokemon">Name : ${nombrePokemon}</h5>
           <p id="tipoPokemon">Type: ${tipoPokemon}</p>
         </div>

         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">Pokemon Features</h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                 <p>Height: ${altura}</p>
                 <p>Weight: ${peso}</p>
                 <p>Moves: ${movimientosPokemon} </p>
                 <p>Abilities: ${habilidadesPokemon}</p>
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
             </div>
           </div>
         </div>
     
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
 </div>
  </div>`
    
    

    }
    catch(error){
        console.log(error);

    }
  

}

anotherfunction(API);




