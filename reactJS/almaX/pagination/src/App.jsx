import { useEffect, useState } from "react";
import Paginate from "./Paginate";

function App() {
  const [product, setProducts] = useState([]);
  const [paginate, setPaginate] = useState(0);

  const NOPAGE_PER_PAGE = 3;
  const TOTAL_PAGES = Math.ceil(product.length/NOPAGE_PER_PAGE);

  const displayProduct = product.slice(paginate * NOPAGE_PER_PAGE, Math.min(paginate*NOPAGE_PER_PAGE+3, product.length));

  const prevPage = ()=>{
    if(paginate === 0) return;
    setPaginate(paginate-1);
  }

  const nextPage = ()=>{
    if(paginate === TOTAL_PAGES) return;
    setPaginate(paginate+1);
  }

  const gotoPage = (page)=>{
    setPaginate(page);
  }

  console.log(product)

  useEffect(()=>{
    const fetchProduct = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProduct();
  }, []);
  return ( <div>
    <h1>Pagination</h1>
    <div>
      {displayProduct.map(({id, title, category})=>(<div key={id}>
        <h3>{title}</h3>
        <p>{category}</p>
      </div>))}
    </div>
    <Paginate next={nextPage} prev={prevPage} onPage={gotoPage} totalPage={TOTAL_PAGES} page={paginate}/>
  </div> );
}

export default App;