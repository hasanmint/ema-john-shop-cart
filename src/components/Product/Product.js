import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {name,price,seller,ratings,img}=props.product;


	return (
		<div className="product">
			<img src={img} alt="" />
			<div className='product-info'>
				<h3 className="product-name">{name}</h3>
				<p>Price: ${price}</p>
				<p>Manufacturer: {seller}</p>
				<p>Ratings: {ratings} Star</p>
			</div>
            <button onClick={()=>props.handleAddToCart(props.product)} className="btn-cart">
                <p>Add to Cart</p>
            </button>
		</div>
	);
};

export default Product;
