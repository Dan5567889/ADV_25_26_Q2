import React, { useState, useEffect } from 'react';
import styles from './GetUsers.module.css';

function GetUsers() {
    // Using the React useState hook to create a state variable 'user' and its setter 'setUser'
    const [user, setUser] = useState([]);

    useEffect(() => {
        // An arrow function for primary functionality
        async function fetchUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUser(data);
        }

        fetchUsers();
    }, []); // Dependency array

    return (
        <div className={styles.card}>
            <h1> GetUsers </h1>
            {user.map((usr) => (
                <div key={usr.id} className={styles.userCard}>
                    <h2> Name: {usr.name} </h2>
                    <p> Email: {usr.email} </p>
                    <p> Phone: {usr.phone} </p>
                    <p> Website: {usr.website} </p>
                </div>
            ))}
        </div>
    );
}

export default GetUsers;
