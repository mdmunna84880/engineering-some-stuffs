/** @format */

import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUsers = async (user) => {
    try {
      setLoading(true);
      const response = await Promise.all([
        fetch(`https://api.github.com/users/${user}`),
        fetch(`https://api.github.com/users/${user}/repos`),
      ]);
      const userData = await response[0].json();
      const userRepo = await response[1].json();

      setUser(userData);
      setRepos(userRepo);

    } catch (err) {
      setError(err);
      setLoading(false);
      console.log(err);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="m-12">
      <h1>Github Profile</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="border rounded-md p-2 focus-within:border-2 focus-within:border-blue-500"
      />
      <button
        onClick={() => fetchUsers(value)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Search
      </button>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
        )}
        {repos.length > 0 && (
          <div>
            <h2>Repositories</h2>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url}>{repo.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
