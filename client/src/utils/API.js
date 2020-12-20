import axios from "axios";

export default {
  //get plants with the plant type annuals
  getPlants: function() {
    return axios.get("/api/annual");
  },
  
  //get plants with the plant type perennial
  getPerennials: function() {
    return axios.get("/api/perennial");
  },

  //get plants with the plant type roses
  getRoses: function() {
    return axios.get("/api/roses");
  },

  getHousePlants: function() {
    return axios.get("/api/houseplant");
  },

  getSucculents: function() {
    return axios.get("/api/succulent");
  },

  getForm: function() {
    return axios.get("/api/form");
  },

  postForm: function() {
    return axios.post("/api/form");
  }

};