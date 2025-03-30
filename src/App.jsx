import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <AppRoutes />

          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;