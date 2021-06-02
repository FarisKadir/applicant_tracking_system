import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MySubmissions from './pages/MySubmissions';
import JobOpenings from './pages/JobsOpenings';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/submissions" component={MySubmissions}/>
          <Route exact path="/jobs" component={JobOpenings}/>
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;