import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import RootLayout from "./components/RootLayout";

function App() {
    const productList = useSelector((state)=>state.product);
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </div>
     );
}

export default App;