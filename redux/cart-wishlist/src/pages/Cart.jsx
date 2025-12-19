import { useDispatch, useSelector } from "react-redux";
import { cartIncreaseQuantity, cartDecreaseQuantity } from "../store/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cartItems);

  return (
    <div className="cart">
      <h2>Items in Your Cart</h2>

      <div className="cart-head">
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>

      {cartItems.map((item) => (
        <div className="cart-row" key={item.productId}>
          <div className="item">
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <p className="item-title">{item.title}</p>
              <p className="rating">{item.rating} ★★★★☆</p>
            </div>
          </div>

          <span>${item.price}</span>

          <div className="quantity">
            <button onClick={()=>dispatch(cartDecreaseQuantity(item.productId))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>dispatch(cartIncreaseQuantity(item.productId))}>+</button>
          </div>

          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="cart-total">
  <span>Total</span>
  <span>
    $
    {cartItems
      .reduce((acc, el) => acc + el.quantity * el.price, 0)
      .toFixed(2)}
  </span>
</div>
    </div>
  );
};

export default Cart;
