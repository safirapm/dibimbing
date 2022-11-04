const axios = require("axios")
let data = {};

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json =>{
    data = json
});

setTimeout(() =>{
    data.title = 'Dibimbing FE';
    console.log(data);
}, 2000)