import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
