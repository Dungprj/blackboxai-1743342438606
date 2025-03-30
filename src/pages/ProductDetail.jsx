import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Mock API call - thực tế sẽ thay bằng fetch API
    const fetchProduct = async () => {
      try {
        // Mock data
        const mockProduct = {
          id: 1,
          name: "Đèn pha LED ô tô cao cấp",
          price: 1200000,
          category: "den-pha",
          images: [
            "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
            "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg",
            "https://images.pexels.com/photos/1637856/pexels-photo-1637856.jpeg"
          ],
          rating: 4.5,
          description: "Đèn pha LED công nghệ mới, độ sáng cao, tiết kiệm điện năng. Phù hợp với nhiều dòng xe khác nhau.",
          specifications: [
            { name: "Thương hiệu", value: "Philips" },
            { name: "Công suất", value: "30W" },
            { name: "Tuổi thọ", value: "50,000 giờ" },
            { name: "Bảo hành", value: "2 năm" }
          ],
          reviews: [
            {
              user: "Nguyễn Văn A",
              rating: 5,
              comment: "Sản phẩm tốt, ánh sáng rất mạnh"
            },
            {
              user: "Trần Thị B",
              rating: 4,
              comment: "Tốt nhưng giá hơi cao"
            }
          ]
        };

        setProduct(mockProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  if (loading) {
    return <div className="loading">Đang tải chi tiết sản phẩm...</div>;
  }

  if (!product) {
    return <div className="not-found">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail__content">
          {/* Product Images */}
          <div className="product-detail__images">
            <div className="product-detail__main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="product-detail__thumbnails">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-detail__info">
            <h1 className="product-detail__title">{product.name}</h1>
            
            <div className="product-detail__rating">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`fas fa-star ${i < Math.floor(product.rating) ? 'active' : ''}`}
                ></i>
              ))}
              <span>({product.rating})</span>
            </div>

            <div className="product-detail__price">
              {new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'VND' 
              }).format(product.price)}
            </div>

            <div className="product-detail__description">
              <h3>Mô tả sản phẩm</h3>
              <p>{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="product-detail__quantity">
              <h3>Số lượng</h3>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="product-detail__add-to-cart"
              onClick={handleAddToCart}
            >
              <i className="fas fa-cart-plus"></i> Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="product-detail__specs">
          <h2>Thông số kỹ thuật</h2>
          <table>
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr key={index}>
                  <th>{spec.name}</th>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Product Reviews */}
        <div className="product-detail__reviews">
          <h2>Đánh giá sản phẩm</h2>
          
          {product.reviews.length > 0 ? (
            <div className="reviews-list">
              {product.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-user">{review.user}</div>
                  <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < review.rating ? 'active' : ''}`}
                      ></i>
                    ))}
                  </div>
                  <div className="review-comment">{review.comment}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-reviews">Chưa có đánh giá nào</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;