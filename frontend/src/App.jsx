import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h2>ShopEase</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Welcome to ShopEase</h1>

        <p>Discover amazing products at the best prices.</p>

        <button>Shop Now</button>
      </section>
      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="product-list">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
              alt="Wireless Headphones"
            />

            <h3>Wireless Headphones</h3>
            <p>$49.99</p>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
              alt="Smart Watch"
            />
            <h3>Smart Watch</h3>
            <p>$79.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
              alt="Running Shoes"
            />
            <h3>Running Shoes</h3>
            <p>$59.99</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </section>
      {/* Website Footer */}
      <footer className="footer">
        <h2>ShopEase</h2>

        <p>Your one-stop shop for amazing products.</p>

        <p>Contact: support@shopease.com</p>

        <p className="copyright">© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
