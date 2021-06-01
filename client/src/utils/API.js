import axios from "axios";

export default {
    getData: function(url) {
        return axios.get(`/api/${url}`);
    },

    updateData: function(url, obj) {
        return axios.put(`/api/${url}`, obj);
    },

    createData: function(url, obj) {
        return axios.post(`/api/${url}`, obj);
    },

    deleteData: function(url, id) {
        return axios.delete(`/api/${url}/${id}`);
    },
    upsertData: function(url, id) {
        return axios.delete(`/api/${url}/${id}`);
    }
}

