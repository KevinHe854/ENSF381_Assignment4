import React from 'react';
import Homepage from './homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import CoursesPage from './CoursesPage';
// import LoginPage from './LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
