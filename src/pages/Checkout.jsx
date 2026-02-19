import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
{/* checkout for adding the nae, address and placing the order*/}
function Checkout() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Address" />

      <h3>Order Summary</h3>
      {items.map(item => (
        <p key={item.id}>
          {item.title} x {item.quantity}
        </p>
      ))}

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;
