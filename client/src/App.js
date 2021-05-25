  
import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
// import Header from './components/Header';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  //const { isLoading } = useAuth0();

  //if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <Navbar />
      {/* <Profile /> */}
      {/* <LoginButton />
      <LogoutButton />
       */}
    </div>
  );
}

export default App;