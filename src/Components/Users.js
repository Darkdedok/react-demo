import {useState, useEffect} from "react";
import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});
const getUsers = () => {
    return axiosInstance.get('/users')
}

function Users() {
    let [users, setUsers] = useState([]);
}

export {Users, getUsers}