import { FaStar } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';


const HomePage = () => {
    // const [name, setName] = useState("jan");
    // const [admin, setAdmin] = useState(false);
    // useEffect(() => {
    //     console.log(`Celebrate ${name}`);
    // }, [name]);
    // useEffect(() => {
    //     console.log(`the user is:  ${admin ? "admin" : "not admin"}.`);
    // }, [admin]);
    // return(
    //     <section>
    //         <h1>REACT useState and useEffect</h1>
    //         <p>Congratulations {name}!</p>
    //         <button onClick={() => setName("Will")}>
    //             Change Winner
    //         </button>
    //         <p>{admin ? "logged in" : "not logged in"}</p>
    //         <button onClick={() => setAdmin(true)}>Log in</button>
    //     </section>
    // );


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users`)
        .then(response => response.json())
        .then(setData);
    }, []);

    if (data){
        return(
         <div>
            <ul>
                {data.map((user) => (
                     <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <button onClick={() => setData([])}>Remove Data</button>
        </div>
        )
    }

    return <p>No users</p>;

}

export default HomePage;