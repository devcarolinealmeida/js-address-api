# js-consumindo-dados-api

Project developed following an Alura platform course to consume API data for address lookup.


https://user-images.githubusercontent.com/104517812/188193396-c9332dcf-ae7f-4bff-bfeb-e29ed77c3e61.mov


> I used the Alura Training Repository and developed the address lookup code:

## How I did

1. First of all, a `async function` and `await`, using a var to consume the API and another to convert it on JSON
```
        async function searchAddress() {
          var searchCap = await fetch("https://viacep.com.br/ws/01001000/json/")
          var searchCapConverted = await searchCap.json()
          console.log(searchCapConverted)
        }
        searchAddress()
```



2. Then, I added a `try` to define a code block to run, and a `catch` to define a code block to handle any error
```
        async function searchAddress() {
            var searchCap = await fetch("https://viacep.com.br/ws/01001000/json/")
            var searchCapConverted = await searchCap.json()
            console.log(searchCapConverted)
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
        searchAddress()
```


3. Added to the function the parameter CAP to use a dynamic search on `{CAP}`

``` 
      async function searchAddress(CAP) {
        var searchCap = await fetch(`https://viacep.com.br/ws/${CAP}/json/`);
```

4. A var to get the input and an `eventListener` to capture the input value in `focusout`

```
      var cap = document.getElementById('cep')
      cap.addEventListener("focusout", () => searchAddress(cap.value))
```

5. I added a var to handle the entries by ID and assign a value to them to autofill the address
```
      var district = document.getElementById('bairro')
      var city = document.getElementById('cidade');
      var address = document.getElementById('endereco');
      var state = document.getElementById('estado')

      district.value = searchCapConverted.bairro;
      city.value = searchCapConverted.localidade;
      address.value = searchCapConverted.logradouro;
      state.value = searchCapConverted.uf
```

6. To conclude, I added a `var` and a `div` to handle the DOM and show the `error message`
```
    var errorMessage = document.getElementById('erro');
    errorMessage.innerHTML = ''
```
```
<div id="erro" class="erro__texto"></div>
```


## The complete code
```
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
```

