import './App.css';
import {useEffect} from "react";
import {getUsers} from "./Components/Users";

function App() {
    useEffect(() => {
        getUsers().then(value => console.log(value))
    }, [])
    return (
        <div>

        </div>
    );
}

export default App;