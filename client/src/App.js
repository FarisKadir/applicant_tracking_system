import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Submissions from './pages/Submissions';
import Jobs from './pages/Jobs';
import UserManagement from './pages/UserManagement';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/submissions" component={Submissions}/>
          <Route exact path="/jobs" component={Jobs}/>
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;