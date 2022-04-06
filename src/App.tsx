import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Naviagtion</h1>
      <nav style={{ borderBottom: '1px solid', paddingBottom: '1rem' }}>
        <Link to="home">Home</Link> | {''}
        <Link to="about">About</Link> | {''}
        <Link to="Contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
