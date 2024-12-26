import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFood = () => {
const food =useLoaderData()   
console.log(food) 
    return (
        <div>
            
        </div>
    );
};

export default SingleFood;