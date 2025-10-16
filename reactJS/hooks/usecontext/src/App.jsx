import './App.css'
import ChildA from './components/ChildA'
import { UserContext } from './contexts/userContext';
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");
  const userDetails = {name: "Md Munna", email: "mdmunna19434@gmail.com"};
  return (
    <div>
      <h2>Learn: useContext</h2>
      <ThemeContext.Provider value={{bgColor, setBgColor}}>
        <UserContext.Provider value={userDetails}>
        <ChildA/>
      </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;