import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import Home from "./pages/home";
import Cart from "./pages/client/cart";
import AdminMeassages from "./pages/admin/adminMessages";
import AdminOrders from "./pages/admin/adminOrders";
import AdminReviews from "./pages/admin/adminReviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<DashBoard />}/>
        <Route path='/cart' element={<Cart />}/>
        {/* <Route path='/?userName=${userName}&password=${password}' element={<Cart />}/> */}
        <Route path='/dashboard/adminMessages' element={<AdminMeassages />}/>
        <Route path='/dashboard/adminOrders' element={<AdminOrders />}/>
        <Route path='/dashboard/adminReviews' element={<AdminReviews />}/>    
      </Routes>
    </BrowserRouter>
  )
}

export default App;
