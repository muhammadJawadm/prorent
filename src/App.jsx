import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProducts from './AllProducts';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
