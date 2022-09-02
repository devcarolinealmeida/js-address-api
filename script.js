// async await

async function searchAddress() {
  try {
    var searchCap = await fetch("https://viacep.com.br/ws/01001250/json/");
    var searchCapConverted = await searchCap.json();
    if (searchCapConverted.erro) {
        throw Error('Address not found')
    }
    console.log(searchCapConverted);
  } catch (erro) {
    console.log(erro);
  }
}
searchAddress();



//-------------------------------------------------
// using .then and promisses
// This code makes a request to an API through its link together with the fetch method and then converts the result to JSON.

//var searchAddress = fetch("https://viacep.com.br/ws/01001000/json/")
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
