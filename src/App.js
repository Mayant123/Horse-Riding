import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';

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
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <a 
        href="https://api.whatsapp.com/send?phone=+919760664422&text=Hello, THK"
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-16 right-4 text-green-500 z-50"
      >
        <i className="fab fa-whatsapp fa-2x"></i>
      </a>
    </div>
  );
}

export default App;
