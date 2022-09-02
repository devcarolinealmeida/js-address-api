var searchAddress = fetch("https://viacep.com.br/ws/01001011/json/")
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('This address dont exist')
        } else
            console.log(r)
    })
    .catch(erro => console.log(erro));

console.log(searchAddress)

