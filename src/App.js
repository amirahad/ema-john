
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Review from './components/review/Review';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div>

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
          <Route path='*' >
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
