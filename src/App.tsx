import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home'
import Aboutus from './pages/aboutus/Aboutus';
import Contacts from './pages/contacts/Contacts';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <div>

          <Route  exact path='/'>
            <Home />
          </Route>


          <Route path='/aboutus'>
            <Aboutus />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/contacts'>
            <Contacts />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

        

        </div>

      </Switch>
        
      <Footer />
    </Router>
  );
}

export default App;
