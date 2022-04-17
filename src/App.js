import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Register from './Register/Register';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
