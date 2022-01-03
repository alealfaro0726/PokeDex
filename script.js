const form = document.getElementById('form')
const input = document.getElementById('input')


form.addEventListener('submit', (ev) => {
    console.log('submitted')
    ev.preventDefault()


const apiData = { 
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    name: input.value.toLowerCase()
}

const apiUrl = `${apiData.url}${apiData.type}/${apiData.name}`


    fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHTML(pokemon))

    const generateHTML =(data) => {
        console.log(data)

        const html = `
            <div class = "name">${data.name}</div>
            <img class = "img" src=${data.sprites.front_default}>
            <div class = "details">
                <span class="type">${data.types[0].type.name}</span>
            </div>
            `
        const output = document.getElementById('output')
        output.innerHTML = html
    }
})


