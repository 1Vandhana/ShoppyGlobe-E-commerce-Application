import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import { FiSearch } from "react-icons/fi";


function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <h2> 🛍️ ShoppyGlobe</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>
      <div className="search-wrapper">
        <span className="search-icon">
            <FiSearch />
        </span>
      
        <input type="text" placeholder="Search..." 
        onChange={(e) => dispatch(setSearch(e.target.value))}/>
      </div>
    </header>
  );
}

export default Header;
