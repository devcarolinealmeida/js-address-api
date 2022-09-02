// async await

async function searchAddress(CAP) {
    var errorMessage = document.getElementById('erro');
    errorMessage.innerHTML = ''
    try {
        var searchCap = await fetch(`https://viacep.com.br/ws/${CAP}/json/`);
        var searchCapConverted = await searchCap.json();
        if (searchCapConverted.erro) {
            throw Error('Address not found')
        }
        var district = document.getElementById('bairro')
        var city = document.getElementById('cidade');
        var address = document.getElementById('endereco');
        var state = document.getElementById('estado')
        
        district.value = searchCapConverted.bairro;
        city.value = searchCapConverted.localidade;
        address.value = searchCapConverted.logradouro;
        state.value = searchCapConverted.uf

        console.log(searchCapConverted);
        return searchCapConverted;
    } catch (erro) {
        errorMessage.innerHTML = '<p>Address not found</p>'
        console.log(erro);
    }
}

var cap = document.getElementById('cep')
cap.addEventListener('focusout', () => searchAddress(cap.value))



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
