/** @format */

import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
        );
        const data = await response.json();
        setPosts((prev)=>([...prev, ...data]));
        setIsLoading(false);
        setHasMore(data.length > 0);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    };
    fetchPosts();
  }, [page]);

  useEffect(()=>{
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) {
        setPage((page)=>page+1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
  return (
    <>
      <h1>Infinite Scroll Practice</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default App;
