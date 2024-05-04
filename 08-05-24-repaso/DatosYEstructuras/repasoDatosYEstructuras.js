const nbaClubes = [
    {
        name: "Los Angeles Lakers",
        city: "Los Angeles",
        state: "California",
        arena: "Crypto.com Arena",
        championships: 17
    },
    {
        name: "Golden State Warriors",
        city: "San Francisco",
        state: "California",
        arena: "Chase Center",
        championships: 7
    },
    {
        name: "Chicago Bulls",
        city: "Chicago",
        state: "Illinois",
        arena: "United Center",
        championships: 6
    },
    {
        name: "Boston Celtics",
        city: "Boston",
        state: "Massachusetts",
        arena: "TD Garden",
        championships: 17
    },
    {
        name: "Miami Heat",
        city: "Miami",
        state: "Florida",
        arena: "Kaseya Center",
        championships: 3
    },
    {
        name: "San Antonio Spurs",
        city: "San Antonio",
        state: "Texas",
        arena: "AT&T Center",
        championships: 5
    },
    {
        name: "New York Knicks",
        city: "New York",
        state: "New York",
        arena: "Madison Square Garden",
        championships: 2
    },
    {
        name: "Toronto Raptors",
        city: "Toronto",
        state: "Ontario",
        arena: "Scotiabank Arena",
        championships: 1
    },
    {
        name: "Dallas Mavericks",
        city: "Dallas",
        state: "Texas",
        arena: "American Airlines Center",
        championships: 1
    },
    {
        name: "Houston Rockets",
        city: "Houston",
        state: "Texas",
        arena: "Toyota Center",
        championships: 2
    }
];

const club = nbaClubes.find(club => club.city === 'Houston')
const indiceClub = nbaClubes.findIndex(club => club.name === 'Toronto Raptors')

// console.log(indiceClub)
// console.log(nbaClubes[7])

// DOM

// Obtener un elemento del HTML
const container = document.querySelector('.container')


// Modificar el elemento o actualizar
container.innerHTML = `<div>
                            <h3>${club.name}</h3>
                            <p>${club.city}</p>
                            <p>${club.state}</p>
                            <p>${club.arena}</p>
                            <p>${club.championships}</p>                            
                       </div>`

let datos = ''
// const nombres = [
//     "Michael",
//     "LeBron",
//     "Kobe",
//     "Shaquille",
//     "Tim",
//     "Larry",
//     "Magic",
//     "Wilt",
//     "Kareem",
//     "Bill",
//     "Oscar",
//     "Kevin",
//     "Stephen",
//     "Dirk",
//     "Hakeem"
// ];
// nombres.forEach(nombre => datos += `<div>${nombre}</div>`)
// console.log(datos)

nbaClubes.forEach(club => datos += `<div>
                                        <h3>${club.name}</h3>
                                        <p>${club.city}</p>
                                        <p>${club.state}</p>
                                        <p>${club.arena}</p>
                                        <p>${club.championships}</p>                            
                                    </div>`
                                )


//TITULO
const titulo = document.querySelector('#titulo')
titulo.innerText = titulo.innerText.toUpperCase()

// EVENTOS
const miBoton = document.querySelector('#miBoton')

miBoton.addEventListener('click', ()=>{
    container.innerHTML = datos
})