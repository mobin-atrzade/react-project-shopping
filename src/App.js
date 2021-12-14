import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
