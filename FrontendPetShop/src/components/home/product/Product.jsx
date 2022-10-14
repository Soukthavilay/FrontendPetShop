import { useState } from 'react';
import { products } from '../../assets/data/data';
import { Heading } from '../../common/Heading';
import { ProductItems } from './ProductItems';

export const Product = () => {
  const [cartItems, setCartItems] = useState(products);
  return (
    <>
      <section className="product">
        <div className="container">
          <Heading
            title="New Products For You"
            desc="Grooming & Supply provides grooming services for all dog and cat breeds. We are fully committed to the health."
          />

          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  );
};
