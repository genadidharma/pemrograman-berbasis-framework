import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Products from './pages/Products/Products';
import Cart from './pages/Products/Cart';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage';
import About from './pages/About/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
