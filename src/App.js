import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route 
      exact 
      path='/' 
      render={(props) => <Welcome {...props} name="Davey" />} 
      />
      <Route path='/clock' component={Clock} />
      <Route path='/contact' component={Contact} />
    </div>
  );
}

export default App;
