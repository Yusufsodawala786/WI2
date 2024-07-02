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
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("No data transferred");
            });
    }, []);

    useEffect(() => {
        console.log("list after fetching data", list);
    }, [list]);

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {list.map((item) => (
                    <li key={item.id} className='flex flex-row justify-start items-center border-b-2 mr-10 '>
                        <div className='flex flex-row w-20 h-20 p-3'>
                            <img src={item.image_url} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h1>{item.item}</h1>
                            <h5 className='text-xs'>{item.price}</h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
