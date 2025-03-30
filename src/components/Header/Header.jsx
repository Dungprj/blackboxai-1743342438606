import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__logo logo-gradient">BAN LINH KIEN</h1>
          
          <nav className="header__nav">
            <Link to="/" className="header__link">Trang Chủ</Link>
            <Link to="/products" className="header__link">Sản Phẩm</Link>
            <Link to="/cart" className="header__link">Giỏ Hàng ({cartItems.length})</Link>
            <Link to="/contact" className="header__link">Liên Hệ</Link>
            
            {user ? (
              <button onClick={logout} className="header__link">
                Đăng Xuất
              </button>
            ) : (
              <>
                <Link to="/login" className="header__link">Đăng Nhập</Link>
                <Link to="/signup" className="header__link">Đăng Ký</Link>
              </>
            )}
          </nav>

          <div className="header__search">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="header__search-input"
            />
            <button className="header__search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;