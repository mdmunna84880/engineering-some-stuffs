/** @format */
import { useSelector } from "react-redux";
import Product from "../components/Product";

function Dashboard() {
  const productList = useSelector((state) => state.product);
  return (
    <div className="products-container">
      {productList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}

export default Dashboard;
