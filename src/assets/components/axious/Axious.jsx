import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Axious = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                console.log(data.data);
                const users = data.data;
                const newData = users.map(user => {
                    const price = user.id * 11;
                    const artificialData = {
                        name : user.name,
                        username: user.username,
                        email: user.email,
                        phone: user.phone,
                        price: price
                    }
                    return artificialData;
                })
                setUser(newData);
            }
            )
    },[])
    console.log(user);
    return (
        <div>
            <BarChart 
                className="w-4/5 h-96 md:w-full"
                width={300}
                height={500}
                data={user}
                >
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="id" />
                    <Tooltip></Tooltip>
                
            </BarChart>
        </div>
            
            
    );
};

export default Axious;