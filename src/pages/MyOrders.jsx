import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/addPurchase')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h2>orders{orders?.length}</h2>
        </div>
    );
};

export default MyOrders;