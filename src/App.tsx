import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './App.css';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Aboutus from './pages/aboutus/Aboutus';
import Contacts from './pages/contacts/Contacts';
import Parceiros from './pages/parceiros/Parceiros';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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

            <Route exact path='/deletarProduto/:id'>
              <DeletarProduto />
            </Route>

            <Route exact path='/aboutus'>
              <Aboutus />
            </Route>

            <Route exact path='/contacts'>
              <Contacts />
            </Route>

            <Route exact path='/parceiros'>
              <Parceiros />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;