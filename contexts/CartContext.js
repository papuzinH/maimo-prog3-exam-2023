import { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({
  defaultValue = [{ name: 'Linterna', id: 10 }],
  children,
}) => {
  const [cart, setCart] = useState(defaultValue);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
