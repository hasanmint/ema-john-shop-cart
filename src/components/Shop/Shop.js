import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(Response=>Response.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        console.log(product)
    }
   

    return (
        <div className='shop-container container'>
            <div>
                <h2>Avilable Total Products:{products.length}</h2>
                <div className="products-container">
                {
                    products.map(product=>
                    <Product
                    product={product}
                    key={product.id}
                    // name={product.name}
                    // price={product.price}
                    // seller={product.seller}
                    // ratings={product.ratings}
                    // img={product.img}
                    handleAddToCart={handleAddToCart}

                    >

                    </Product>)
                }
                </div>
                
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;