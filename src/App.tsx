import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home'
import Aboutus from './pages/aboutus/Aboutus';
import Contacts from './pages/contacts/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
            <Route path='/aboutus'>
              <Aboutus/>
            </Route>

            <Route path='/contacts'>
              <Contacts/>
            </Route>

            <Route path='/home'>
              <Home/>
            </Route>

          </div>

        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
