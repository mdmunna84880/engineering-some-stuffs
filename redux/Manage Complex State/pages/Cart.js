const Cart = () => {
  // Mock cart data (replace later with state or context)
  const cartItems = [
    { id: 1, name: "Product One", price: 20, quantity: 1 },
    { id: 2, name: "Product Two", price: 35, quantity: 2 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.list}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.item}>
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price} × {item.quantity}</p>
                </div>
                <p>${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3>Total: ${totalPrice}</h3>
            <button style={styles.button}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "0 20px",
  },
  list: {
    borderTop: "1px solid #eee",
    marginTop: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #eee",
  },
  summary: {
    marginTop: "20px",
    textAlign: "right",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Cart;
