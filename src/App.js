import './App.css';
import { useState, createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routers/AppRoutes';
import { CartProvider } from './Components/Cart/CartContext';
import { WishlistProvider } from './Components/Cart/WishlistContext';
import SplashScreen from './Components/SplashScreen';
import AddressModal from './Components/AddressModal';

export const HeroReadyContext = createContext(false);

function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem("splashSeen")
  );
  const [heroReady, setHeroReady] = useState(
    () => !!sessionStorage.getItem("splashSeen")
  );

  const handleSplashDone = () => {
    sessionStorage.setItem("splashSeen", "1");
    setShowSplash(false);
    setHeroReady(true);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <HeroReadyContext.Provider value={heroReady}>
            {showSplash && <SplashScreen onDone={handleSplashDone} />}
            <AppRoutes />
          </HeroReadyContext.Provider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
