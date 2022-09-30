import '../styles/grid.css';
import '../styles/globals.css';
import { AppProvider } from '../contexts/AppContext';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </CartProvider>
  );
}

export default MyApp;
