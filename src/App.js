import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './items/Nav'
import MainPage from './components/MainPage'
import UploadPage from './components/UploadPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'

import LoginPage from './items/LoginPage'
import RegisterPage from './items/RegisterPage'

function App() {

  return (
    <div className="container">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/upload" component={UploadPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/my-cart" component={CartPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
