import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routers/AppRoutes';
import { CartProvider } from './Components/Cart/CartContext';
import { WishlistProvider } from './Components/Cart/WishlistContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <AppRoutes />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
