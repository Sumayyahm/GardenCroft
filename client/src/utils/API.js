import axios from "axios";

export default {
  //get plants with the plant type annuals
  getPlants: function() {
    return axios.get("/api/plants");
  },
  
  //get plants with the plant type perennial
  getPerennials: function() {
    return axios.get("/api/perennial");
  },

  //get plants with the plant type roses
  getRoses: function() {
    return axios.get("/api/roses");
  },

  getForm: function() {
    return axios.get("/api/form");
  },

  postForm: function() {
    return axios.post("/api/form");
  }

};