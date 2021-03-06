import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import Register from './Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import ResetPassword from './ResetPassword/ResetPassword';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
         
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
          <Route path="/reset" element={<ResetPassword></ResetPassword>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
