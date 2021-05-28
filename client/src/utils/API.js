import axios from "axios";

export default {
    getData: function(data) {
        return axios.get(`/api/${data}`);
    },

    updateData: function(data) {
        return axios.put(`/api/${data}`);
    },

    createData: function(data) {
        return axios.post(`/api/${data}`);
    },

    deleteData: function(data) {
        return axios.get(`/api/${data}`);
    }
}

