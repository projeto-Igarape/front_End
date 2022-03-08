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
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';


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

          <Route path='/deletarCategoria/:id'>
            <DeletarCategoria />
          </Route>

          <Route exact path='/cadastroCategoria/:id'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/cadastroProduto'>
            <CadastroProduto />
          </Route>

          <Route exact path='/cadastroProduto/:id'>
            <CadastroProduto />
          </Route>

          <Route exact path='/categorias'>
            <ListaCategoria />
          </Route>

          <Route exact path='/listaProduto'>
            <ListaProduto />
          </Route>

          <Route path='/deletarProduto/:id'>
            <DeletarProduto />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;