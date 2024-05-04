// MODIFICAMOS TÍTULO
const etiquetaTitle = document.querySelector('title')
etiquetaTitle.innerText = 'DOM y Eventos ✅'

// Agregamos contenido al h1

const h1 = document.querySelector('h1')
h1.innerText = 'DOM y Eventos'

// Agregamos contenido a la tabla
const nbaClubs = [
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

const tableBody = document.querySelector('.table-body')

let datos = '';

nbaClubs.forEach((club, index) => {
    datos += `<tr id=${index}-ID>
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.state}</td>
                <td>${club.arena}</td>
                <td>${club.championships}</td>
             </tr>
            `
})
// console.log(datos)
tableBody.innerHTML = datos
