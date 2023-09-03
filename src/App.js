
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';
import Analytics from './pages/Analytics';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/setting' element={<Settings />} />
          <Route exact path='/analytics' element={<Analytics />} />
          <Route exact path='/product' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
