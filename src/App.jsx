import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminToolPage from './components/AdminToolPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<AdminToolPage />} />
      </Routes>
  );
};

export default App;
