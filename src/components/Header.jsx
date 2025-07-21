import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <h1>UrbanCart</h1>
      </NavLink>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Shop
        </NavLink>
        <NavLink to="/cart" className="link cart-link">
          Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
