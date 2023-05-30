import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
