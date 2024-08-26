import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-white bg-gray-100">
        <Header />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<Home />} />      
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
