import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(()=>{
      fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-8 mt-12 mx-auto">
      {products.map((product)=>{
        return <div key={product.id} className="group bg-white hover:bg-gray-200 scale-100 hover:scale-110 transition-all shadow-md hover:shadow-lg rounded-lg p-4 hover:p-5 linear ">
          <h1 className="group-hover:font-bold line-clamp-2 bg-linear-to-r from-orange-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">{product.title}</h1>

        </div>
      })}
    </div>
  )
}

export default App
