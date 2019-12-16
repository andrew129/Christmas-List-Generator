import axios from "axios";

export default {
    saveList: function(data) {
        console.log('data coming in', data)
        return axios.post('/api/lists/', data)
    },

    getLists: function() {
        return axios.get('/api/lists/')
    }
}