import React from 'react';
import './Product.css';

const Product = ( {handleAddToCart,product}) => {

    // console.log(props)
    const {name,price,seller,ratings,img}=product;


	return (
		<div className="product">
			<img src={img} alt="" />
			<div className='product-info'>
				<h3 className="product-name">{name}</h3>
				<p>Price: ${price}</p>
				<p>Manufacturer: {seller}</p>
				<p>Ratings: {ratings} Star</p>
			</div>
            <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                <p>Add to Cart</p>
            </button>
		</div>
	);
};

export default Product;
