import {useState, useEffect} from "react";
import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});
const getUsers = () => {
    return axiosInstance.get('/users')
}

const getUser = (id) => {
    return axiosInstance.get('/users/' + id);
}
const getPosts = () => {
    return axiosInstance.get('/posts/');
}

function Users() {
    let [users, setUsers] = useState([]);
}

export {Users, getUsers, getUser, getPosts}