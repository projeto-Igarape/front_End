import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/cadastroUsuario'>
            <CadastroUsuario />
          </Route>

          <Route exact path='/cadastroCategoria'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/cadastroCategoria/:id'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/categorias'>
            <ListaCategoria />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;