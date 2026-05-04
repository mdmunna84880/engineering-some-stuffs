/** @format */

import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch data on first rendering
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Api Fetching</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map(({ id, userId, title, body }) => (
            <div key={id}>
              <li>{userId}</li>
              <li>{title}</li>
              <li>{body}</li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
