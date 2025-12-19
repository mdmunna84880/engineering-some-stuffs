/** @format */
import { useSelector } from "react-redux";

function Dashboard() {
  const productList = useSelector((state) => state.product);
  return (
    <div className="products-container">
      {productList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
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
