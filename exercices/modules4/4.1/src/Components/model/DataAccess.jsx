import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'
function getAllName(){
   return axios.get(baseUrl).then(response=> response.data)
}
function addOnePerson(person){
   return axios.post(baseUrl,person).then(response=>response.data)
}

export default {getAllName, addOnePerson};
