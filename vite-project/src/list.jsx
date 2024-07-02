import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a')
            .then(res => {
                console.log('Data fetched:', res.data);
                setList(res.data);
                console.log("list after fetching data", list)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("No data transferred");
            });
    }, []);

    return (
        <div>
            <h1>List</h1>
            {error && <p>{error}</p>}
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
