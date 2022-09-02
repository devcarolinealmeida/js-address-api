async function searchAddress() {
    var searchCap = await fetch("https://viacep.com.br/ws/01001000/json/")
    var searchCapConverted = await searchCap.json()
    console.log(searchCapConverted)
}
searchAddress()




// var searchAddress = fetch("https://viacep.com.br/ws/01001000/json/")
//     .then(response => response.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('This address dont exist')
//         } else
//             console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(message => console.log('Concluded'));

// console.log(searchAddress)

