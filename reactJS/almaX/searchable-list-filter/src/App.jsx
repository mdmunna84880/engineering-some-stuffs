import { useEffect, useState } from "react"
import Card from "./Card";

function App() {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [key, setKey] = useState("");

  const filterProduct = function(products=[], key=""){
    key = key.toLowerCase();
    return products.filter(({title="", category=""})=>title.toLowerCase().includes(key) || category.toLowerCase().includes(key));
  }

  const handleSearch = (e)=>{
    setKey(e.target.value);
    setFilteredProduct(filterProduct(products, key));
  }

  const displayProduct = key === "" ? products : filteredProduct;

  useEffect(()=>{
    const fetchProduct = async()=>{
      try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      }catch(e){
        console.log(e);
      }
    }

    fetchProduct();
  }, [])
  

  return (
    <section>
      <h1>Searchable List Filter</h1>
      <input type="text" onChange={handleSearch} className="border"/>
      <div>
        {displayProduct.map((item)=><Card key={item.id} title={item.title} category={item.category} description={item.description}/>)}
      </div>
    </section>
  )
}

export default App
