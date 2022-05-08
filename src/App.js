import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Blog from './Pages/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Orders from './Pages/Orders/Orders';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/product/:productId" element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        } ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
         <Route path="/addproduct" element={
          <RequireAuth>
               <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
         <Route path="/manageproduct" element={
          <RequireAuth>
               <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
