# iugu.js

## Instalação

`npm install iugu.js`

## Exemplo de Uso
```js
let iugu = require('iugu.js')
iugu.setAuthorization('authorization_token')
```

Para usar

```js
iugu.customer.create({
  'email': 'email@email.com',
  'name': 'Nome do Cliente',
  'notes': 'Anotações Gerais'
})
  .then(r => {})
  .catch(e => {})
```

Para listar os métodos disponívels

```js
iugu.methods

[
  'paymentToken',
  'charge',
  ...
  'financialTransactionRequests.simulateAdvance',
  'financialTransactionRequests.advance'
]
```

## Documentação
Acesse [iugu.com/documentacao](http://iugu.com/documentacao)