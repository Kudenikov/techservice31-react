import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from "./Main";
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={
        <Main />
      } />
      <Route path="/signin" element={
        <Login />
      } />
      <Route path="/signup" element={
        <Register />
      } />
    </Routes>
    </>
  );
}

export default App;
