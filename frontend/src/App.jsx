import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/products";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Welcome to ShopEase</h1>

        <p>Discover amazing products at the best prices.</p>

        <button>Shop Now</button>
      </section>
      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
      {/* Website Footer */}
      <Footer />
    </div>
  );
}

export default App;
