import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero-section">
      <h2 className="hero-title">Style for Every Story</h2>
      <p className="hero-subtitle">
        Discover curated collections of modern apparel and accessories.
      </p>
      <Link to="/shop" className="hero-link">
        Explore Collections
      </Link>
    </div>
  );
};

export default HomePage;
