const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascotas = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let atakJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre 
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './img/hipodoge.webp', 5)

let capipepo = new Mokepon('Capipepo', './img/capipepo.webp', 5)

let ratigueya = new Mokepon('Ratigueya', './img/ratigueya.webp', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'    
    

    mokepones.forEach((mokepon) => {
       opcionDeMokepones = ` 
       <input type="radio" name="mascota" id=${mokepon.nombre} />
       <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
          <p>${mokepon.nombre}</p> 
          <img src=${mokepon.foto} alt=${mokepon.nombre} >
       </label>
       `
       contenedorTarjetas.innerHTML += opcionDeMokepones

       inputHipodoge = document.getElementById('Hipodoge')
       inputCapipepo = document.getElementById('Capipepo')
       inputRatigueya = document.getElementById('Ratigueya')

    })

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
    
    

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selecionarMascotaJugador(){ 
    sectionSeleccionarMascotas.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'  

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    selecionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
       // const element = array[i];
       if(mascotaJugador == mokepones[i].nombre) {
        ataques = mokepones[i].ataques
       }       
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataques) => {
        ataquesMokepon = `
        <button id=${ataques.id} class="btnAtaque BAtaque">${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                atakJugador.push('Fuego')
                console.log(atakJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💧') {
                atakJugador.push('Agua')
                console.log(atakJugador)
                boton.style.background = '#112f58'
            } else {
                atakJugador.push('Tierra')
                console.log(atakJugador)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
    //selecionarMascotaEnemigo()
}

function selecionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('Fuego')
    } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('Agua')
    } else {
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
    //combate()
}

function iniciarPelea() {
    if(atakJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueEnemigo[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let i = 0; i < atakJugador.length; i++) {
        if(atakJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i)
            crearMensaje("EMPATE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(atakJugador[i] === 'Fuego'&& ataqueEnemigo[i] === 'Tierra') {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (atakJugador[i] === 'Agua' && ataqueEnemigo[i] === 'Fuego') {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (atakJugador[i] === 'Tierra' && ataqueEnemigo === 'Agua'){
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            indexAmbosOponentes(i, i)
            crearMensaje("PERDISTE")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
        
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones! Ganaste :)")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento, Perdiste :(")
    }
}

function crearMensaje(resultado){
   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
   location.reload() 
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)