import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;