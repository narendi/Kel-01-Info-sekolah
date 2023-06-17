import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Product from './pages/Product.jsx';
import Jurusan from './pages/Jurusan';
import ProductList from './pages/ProductList.jsx';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
        {/* <Login /> */}
      {/* <Sidebar> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jurusan" element={<Jurusan />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      {/* </Sidebar> */}
    
    </BrowserRouter>
    
  );
};

export default App;