import React from 'react';
import './App.css';
import Login from './components/login';
import { UserProvider } from './context/Usercontext';
import Dboard from './components/dashboard';
import EditDetail from './components/editdetail';
import Clist from './components/customer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        console.error('ServiceWorker registration failed: ', err);
      });
  });
}

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dboard />} />
          <Route path="/editdetail" element={<EditDetail />} />
          <Route path="/customer" element={<Clist />} />
          <Route path="/editdetail/:id" element={<EditDetail />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
