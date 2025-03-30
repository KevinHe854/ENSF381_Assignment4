import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
// import CoursesPage from './CoursesPage';
// import LoginPage from './LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
