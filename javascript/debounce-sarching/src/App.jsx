import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { debounce } from './debounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const filterProduct = useMemo(()=>results.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.price === Number(searchTerm)
  ), [results, searchTerm]);

  const desbouncedSetSearchTerm = useMemo(() => debounce(setSearchTerm, 500), [setSearchTerm]);

  const handleInputChange = (event)=>{
    const value = event.target.value;
    desbouncedSetSearchTerm(value);
  }

  

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get("https://fakestoreapi.com/products");
        setResults(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);
  


  return (
    <div className='p-4'>
        <h1>Debounce Search</h1>
        <div className='flex justify-center mb-4 mt-12'>
          <input type="text" className='border' onChange={handleInputChange}/>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filterProduct.map(product => (
            <div key={product.id} className='p-1 border rounded-md shadow-md hover:shadow-lg h-40 overflow-hidden'>
              <li className='text-2xl line-clamp-1'>{product.title}</li>
              <p className='text-sm text-muted line-clamp-3'>
                {product.description}
              </p>
            </div>
            
          ))}
        </ul>
    </div>
  )
}

export default App
