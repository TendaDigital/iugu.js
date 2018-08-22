# iugu.js

## Instalação

`npm install @tenda.digital/iugu`

## Exemplo de Uso
```js
const Iugu = require('@tenda.digital/iugu')
let iugu = new Iugu()
iugu.setBasicAuthorization('basic_auth_token')
iugu.setTokenAuthorization('api_token')
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