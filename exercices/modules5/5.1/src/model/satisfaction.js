import axios from "axios";
const baseUrl =  'http://localhost:3001/satisfactions'

const getAll = ()=>{
    return axios.get(baseUrl)
}

const addOne = ()=>{
    return axios.post
}