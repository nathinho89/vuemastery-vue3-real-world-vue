import axios from 'axios';

const apiClients = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClients.get('/events');
    },
    getEvent(id) {
        return apiClients.get('/events/'+id);
    }
}