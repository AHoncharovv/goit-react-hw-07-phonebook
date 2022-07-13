import axios from "axios";

axios.defaults.baseURL = 'https://62cec879826a88972d02f4f2.mockapi.io';

axios.get('/contacts')
    .then(function (response) {
        console.log(response.data);
    });
        
axios.delete(`/contacts/${id}`)
    .then(function (response) {
        console.log(response.data);
    });

axios.post(`/contacts`, user)
    .then(function (response) {
        console.log(response.data);
    });