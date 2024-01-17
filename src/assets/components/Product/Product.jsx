import React from 'react';

const Product = ({product}) => {
    const {name, price, features} = product;
    return ( 
        <div className="bg-slate-200 rounded-lg p-5">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <h5 className="text-lg font-semibold">${price}</h5>
            <div>
                {
                    Object.entries(features).map(([key, value]) => (
                        <h5 className="text-base mb-1 font-semibold" key={key}>{key}: {value}</h5>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Product;