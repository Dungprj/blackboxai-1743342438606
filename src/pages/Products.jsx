import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    category: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    // Mock API call
    const fetchProducts = async () => {
      try {
        // Thực tế sẽ thay bằng fetch API
        const mockProducts = [
          {
            id: 1,
            name: "Đèn pha LED ô tô",
            price: 1200000,
            category: "den-pha",
            image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
            rating: 4.5
          },
          // Thêm các sản phẩm khác...
        ];
        
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProducts = products.filter(product => {
    return (
      (filter.category === '' || product.category === filter.category) &&
      (filter.minPrice === '' || product.price >= Number(filter.minPrice)) &&
      (filter.maxPrice === '' || product.price <= Number(filter.maxPrice))
    );
  });

  if (loading) {
    return <div className="loading">Đang tải sản phẩm...</div>;
  }

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Danh sách sản phẩm</h1>
        
        <div className="products-content">
          {/* Filter Sidebar */}
          <aside className="products-filter">
            <h3>Bộ lọc</h3>
            
            <div className="filter-group">
              <h4>Danh mục</h4>
              <select 
                name="category" 
                value={filter.category}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả</option>
                <option value="den-pha">Đèn pha</option>
                <option value="lop-xe">Lốp xe</option>
                <option value="dau-nhot">Dầu nhớt</option>
              </select>
            </div>
            
            <div className="filter-group">
              <h4>Khoảng giá</h4>
              <div className="price-range">
                <input 
                  type="number" 
                  name="minPrice" 
                  placeholder="Từ" 
                  value={filter.minPrice}
                  onChange={handleFilterChange}
                />
                <span>-</span>
                <input 
                  type="number" 
                  name="maxPrice" 
                  placeholder="Đến" 
                  value={filter.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </aside>
          
          {/* Product List */}
          <main className="products-list">
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                Không tìm thấy sản phẩm phù hợp
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;