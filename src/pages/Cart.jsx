import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <div className="empty-cart__content">
            <i className="fas fa-shopping-cart"></i>
            <h2>Giỏ hàng của bạn đang trống</h2>
            <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
            <Link to="/products" className="empty-cart__button">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Giỏ hàng của bạn</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td className="product-info">
                      <img src={item.image} alt={item.name} className="product-image" />
                      <div className="product-details">
                        <h3>{item.name}</h3>
                      </div>
                    </td>
                    <td className="product-price">
                      {new Intl.NumberFormat('vi-VN', { 
                        style: 'currency', 
                        currency: 'VND' 
                      }).format(item.price)}
                    </td>
                    <td className="product-quantity">
                      {item.quantity || 1}
                    </td>
                    <td className="product-total">
                      {new Intl.NumberFormat('vi-VN', { 
                        style: 'currency', 
                        currency: 'VND' 
                      }).format(item.price * (item.quantity || 1))}
                    </td>
                    <td className="product-remove">
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="remove-button"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-summary">
            <h3>Tổng cộng giỏ hàng</h3>
            <div className="summary-row">
              <span>Tạm tính:</span>
              <span>
                {new Intl.NumberFormat('vi-VN', { 
                  style: 'currency', 
                  currency: 'VND' 
                }).format(calculateTotal())}
              </span>
            </div>
            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <span>Miễn phí</span>
            </div>
            <div className="summary-row total">
              <span>Tổng tiền:</span>
              <span>
                {new Intl.NumberFormat('vi-VN', { 
                  style: 'currency', 
                  currency: 'VND' 
                }).format(calculateTotal())}
              </span>
            </div>
            <Link to="/checkout" className="checkout-button">
              Thanh toán
            </Link>
            <Link to="/products" className="continue-shopping">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;