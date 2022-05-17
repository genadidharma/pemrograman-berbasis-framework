import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import routes from './Routes';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

export const AuthContext = React.createContext(null)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is Logged in ? {JSON.stringify(isLoggedIn)}    
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Switch>
            {
              routes.map(route => (
                <Route 
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </Switch>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
