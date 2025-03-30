import ProductCard from '../components/ProductCard/ProductCard';
import './Home.scss';

const Home = () => {
  // Mock data - sẽ thay thế bằng API call sau
  const featuredProducts = [
    {
      id: 1,
      name: "Đèn pha LED ô tô",
      price: 1200000,
      image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
      rating: 4.5
    },
    {
      id: 2,
      name: "Lốp xe hơi Michelin",
      price: 2500000,
      image: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg",
      rating: 4.8
    },
    {
      id: 3,
      name: "Bộ lọc gió",
      price: 350000,
      image: "https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg",
      rating: 4.2
    },
    {
      id: 4,
      name: "Dầu nhớt động cơ",
      price: 450000,
      image: "https://images.pexels.com/photos/1267703/pexels-photo-1267703.jpeg",
      rating: 4.7
    }
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="container">
          <div className="home__hero-content">
            <h1 className="home__hero-title">Linh kiện ô tô chính hãng</h1>
            <p className="home__hero-subtitle">Chất lượng cao - Giá cả hợp lý - Bảo hành dài hạn</p>
            <button className="home__hero-button">Mua ngay</button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="home__products">
        <div className="container">
          <h2 className="home__section-title">Sản phẩm nổi bật</h2>
          <div className="home__products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="home__banner">
        <div className="container">
          <div className="home__banner-content">
            <h3>Giảm giá 20% cho đơn hàng đầu tiên</h3>
            <p>Sử dụng mã: WELCOME20</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;