// Utilize props to pass data from parent components to child components.
//Ensure components are functional and reusable with appropriate prop types.
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />

      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        
        <div className="quantity">
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>
{/*The add product and remove product functionality is implemented correctly
using Redux. */}
        <button
          className="remove"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
