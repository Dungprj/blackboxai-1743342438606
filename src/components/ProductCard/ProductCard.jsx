import { useCart } from '../../context/CartContext';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
        <div className="product-card__badge">Mới</div>
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        
        <div className="product-card__rating">
          {[...Array(5)].map((_, i) => (
            <i 
              key={i} 
              className={`fas fa-star ${i < Math.floor(product.rating) ? 'active' : ''}`}
            ></i>
          ))}
          <span>({product.rating})</span>
        </div>
        
        <div className="product-card__price">
          {new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
          }).format(product.price)}
        </div>
        
        <button 
          className="product-card__button"
          onClick={() => addToCart(product)}
        >
          <i className="fas fa-cart-plus"></i> Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;