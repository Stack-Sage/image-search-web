import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './components/Background';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// xo06x9tZy9N548QS34Yyv3OUbLtuJzCTe7G8V8vzo_g

function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Body />} />
        {/* Add other routes here if needed */}
      </Routes>

     

    </Router>
  );
}

export default App;
