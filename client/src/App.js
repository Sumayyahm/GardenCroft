import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Plants from "./components/Plants";
import Annuals from './components/Annuals/Annuals';
import Perennial from './components/Perennials/Perennials';
import Roses from './components/Roses/Roses';
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from './components/Contact';
import Cart from './components/CartPage';
import Stripe from './components/Stripe/StripeContainer';


class App extends Component {
    render() {
      return (  
          <CartProvider>    
         <BrowserRouter>
          <div>
            <Navbar />
              <Switch>
               <Route exact path={["/", "/home"]} >
                   <Home />
               </Route>
               <Route path="/cart">
                    <Cart />
               </Route>
               <Route path={`/plants/annuals`}>
                    <Annuals />
                </Route>
                <Route path={`/plants/perennial`}>
                    <Perennial />
                </Route>
                <Route path={`/plants/roses`}>
                    <Roses />
                </Route>
               <Route exact path="/plants">
                    <Plants />
               </Route>
               <Route exact path="/contact">
                    <Contact />
               </Route>
               <Route exact path="/checkout">
                   <Stripe />
               </Route>
              <Route component={Error}/>
             </Switch>
            <Footer /> 
          </div> 
        </BrowserRouter>
        </CartProvider>
      );
    }
  }
   
  export default App;

    
    
  


