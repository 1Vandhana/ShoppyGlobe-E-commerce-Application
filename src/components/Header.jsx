import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import { FiSearch } from "react-icons/fi";

// Header for the Shoppyglobe application //
function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <h1 className="logo">
        <span className="shoopy">🛍️Shoopy</span>
        <span className="globe">Globe</span>
      </h1>
     {/* Navbar for Home and cart using Link tag */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>
      <div className="search-wrapper">
        <span className="search-icon">
            <FiSearch />
        </span>
      {/* Implement a search feature to filter products */}
        <input type="text" placeholder="Search..." 
        onChange={(e) => dispatch(setSearch(e.target.value))}/>
      </div>
    </header>
  );
}

export default Header;
