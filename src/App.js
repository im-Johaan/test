// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSpring } from '@react-spring/web'; // Import React Spring
import Message from './components/Message.js'; // Import the HelloMessage component
import Sign from './components/Sign.js';
import Intro from './components/Intro.js';
import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';
import { useAuth } from './components/AuthContext.js';



function App() {
  const { isAuthenticated } = useAuth();
  
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });
  return (
    <Router>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Intro style={props} />} />
          <Route path="/login" element={<Login style={props} />} />
          <Route path="/signup" element={<Sign style={props} />} />
          <Route path="/message" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Message />
          </PrivateRoute>
        } />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
