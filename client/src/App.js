import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Requisitions from './pages/Requisitions';
import UserManagement from './pages/UserManagement';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/requisitions" component={Requisitions}/>
          <Route exact path="/usermanagement" component={UserManagement} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;