import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
