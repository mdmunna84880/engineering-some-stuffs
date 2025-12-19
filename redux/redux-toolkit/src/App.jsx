/** @format */

import {Routes, Route} from "react-router"
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
