import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />      
          <Route path='/about-us' element={<About />} />      
          <Route path='/contact-us' element={<Contact />} />      
          <Route path='/products' element={<Products />} />
          <Route path='/gallery' element={<Gallery />} />       
          <Route path='/policy' element={<PrivacyPolicy />} />       
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>      
    </div>
  );
}

export default App;
