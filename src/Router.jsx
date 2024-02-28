import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminToolPage from './components/AdminToolPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={AdminToolPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
