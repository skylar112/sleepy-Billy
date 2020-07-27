//we're going to make a call to random user, get data back to populate the card with users. 
//it will be an object that with pic, names etc we can put into the cards
import axios from 'axios';

export default {
    getUsers: function() {
    
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
    };    