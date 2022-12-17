import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import TodaysDeals from "./components/Pages/TodaysDeals/TodaysDeals";
import CustomerService from "./components/Pages/CustomerService/CustomerService";
import Registery from "./components/Pages/Registery/Registery";
import GiftCards from "./components/Pages/GiftCards/GiftCards";
import Sell from "./components/Pages/Sell/Sell";
import ShopDeals from "./components/Pages/ShopDeals/ShopDeals";
function App() {
  return (
      <Router>
        {/* Header */}
        <Header />
        <NavBar />
        <Routes>
          <Route path='/home' element={<Navigate replace to='/'/>} />
          <Route path='/' element={<Home />} />
          <Route path='/todaysdeals' element={<TodaysDeals/>} />
          <Route path='/customerservice' element={<CustomerService/>} />
          <Route path='/registery' element={<Registery/>} />
          <Route path='/giftcards' element={<GiftCards/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/shopdeals' element={<ShopDeals/>} />
        </Routes>
      </Router>
  );
}

export default App;
