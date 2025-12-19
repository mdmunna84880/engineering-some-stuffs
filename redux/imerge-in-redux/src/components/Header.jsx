import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const cartItems = useSelector((state)=>state.cartItems);
  const wishLists = useSelector((state)=>state.wishLists);
  return (
    <header style={styles.header}>
      <Link to="/"><h1 style={styles.logo}>MyStore</h1></Link>

      <nav style={styles.nav}>
        <div style={styles.iconWrapper}>
          <FaHeart size={22} />
          <span style={styles.badge}>{wishLists.length}</span>
        </div>

        <Link to="/cart">
        <div style={styles.iconWrapper}>
          <FaShoppingCart size={22} />
          <span style={styles.badge}>{cartItems.reduce((acc, el)=>acc+el.quantity, 0)}</span>
        </div>
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    borderBottom: "1px solid #eee",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  iconWrapper: {
    position: "relative",
    cursor: "pointer",
  },
  badge: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    fontSize: "12px",
    padding: "2px 6px",
  },
};

export default Header;
