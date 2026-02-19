import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
 {/* Add a button in each ProductItem to add the product to the cart.*/}
function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />
{/* title and price of the product*/}
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="card-buttons">
        <Link to={`/product/${product.id}`}>
          <button >View</button>
        </Link>
{/*Add a button in each CartItem to remove the product from the cart*/}
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
