import './App.css';
import {useEffect, useState} from "react";
import {getUsers, getUser, getPosts} from "./Components/Users";
import {User} from "./Components/User";
import {posts} from "./Components/Posts";
import {logDOM} from "@testing-library/react";

function App() {
    let [users, setUsers] = useState([]);
    let [postsOfChosenUser, setPostsOfChosenUser] = useState(null);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])


    const postsButton = (id) => {getPosts(id).then(value => setPostsOfChosenUser(value.data));}
    return (<div>
        {users.map(value => <User
            key={value.id}
            item={value}
            postsButton={postsButton}/>)}
        <hr/>
<div Posts posts ={posts}/>
    </div>);
}

export default App;