import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Login, ProductDetail, Products } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='login' element={<Login onLogin={login} />} />
          <Route element={<PrivateRoute />}>
            <Route path='/product/:id' element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

let login = (from, history) => {
  fakeAuth.authenticate(() => {
    history(from)
  })
}

function PrivateRoute() {
  const location = useLocation()

  return fakeAuth.isAuthenticated
    ? <Outlet />
    : <Navigate to={
      {
        pathname: '/login',
        state: { from: location.pathname }
      }
    } />
}

export default App;
