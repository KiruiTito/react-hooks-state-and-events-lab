import React, { useState } from 'react';
import './Item.css';

function Item({ id, name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
  };

  return (
    <li className={`${isInCart ? 'in-cart' : ''}`}>
      <h3>{name}</h3>
      <p>{category}</p>
      <button onClick={isInCart ? handleRemoveFromCart : handleAddToCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
