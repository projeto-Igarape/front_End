import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastroUsuario'>
            <CadastroUsuario />
          </Route>

          <Route exact path='/formularioCategoria'>
            <ListaCategoria />
          </Route>
          <Route exact path='/formularioCategoria/:id'>
            <ListaCategoria />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;