import React, { useContext} from 'react';
// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext';



const Products =  => {
	//call the useContext hook and pass in the context object we want to use into it.
	const { product, addItem} = useContext(ProductContext) //This will allow the component to get its data solely from Context Api vs props
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
