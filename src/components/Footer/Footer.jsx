import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Điều hướng</h3>
            <div className="footer__links">
              <Link to="/" className="footer__link">Trang chủ</Link>
              <Link to="/products" className="footer__link">Sản phẩm</Link>
              <Link to="/contact" className="footer__link">Liên hệ</Link>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Về chúng tôi</h3>
            <p className="footer__text">
              Chuyên cung cấp các linh kiện điện tử, phụ tùng ô tô chất lượng cao
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Liên hệ</h3>
            <p className="footer__text">
              <i className="fas fa-map-marker-alt"></i> 123 Đường ABC, Hà Nội
            </p>
            <p className="footer__text">
              <i className="fas fa-phone"></i> 0123 456 789
            </p>
            <p className="footer__text">
              <i className="fas fa-envelope"></i> info@banlinhkien.com
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Mạng xã hội</h3>
            <div className="footer__social">
              <a href="https://facebook.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://zalo.me" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-zalo"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <p>© {new Date().getFullYear()} BAN LINH KIEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;