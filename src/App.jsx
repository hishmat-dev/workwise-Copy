import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Landing = lazy(() => import('./Landing.jsx'));
const ForgotPassword = lazy(() => import('./components/Forgot/ForgotPassword.jsx'));
const Register = lazy(() => import('./components/Register/Register.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
