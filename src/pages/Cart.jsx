import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link to="/">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;

