var searchAddress = fetch('https://viacep.com.br/ws/01001000/json')
.then(answer => answer.json())
.then(a => console.log(a));

console.log(searchAddress)