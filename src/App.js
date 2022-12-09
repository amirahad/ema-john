
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Register from './components/Register/Register';
import Review from './components/review/Review';
import Shop from './components/shop/Shop';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div>

      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" >
              <Shop />
            </Route>
            <Route path="/shop" >
              <Shop />
            </Route>
            <Route exact path="/review" >
              <Review />
            </Route>
            <Route path="/inventory" >
              <Inventory />
            </Route>
            <Route path="/placeorder" >
              <PlaceOrder />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/register" >
              <Register />
            </Route>
            <Route path='*' >
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
