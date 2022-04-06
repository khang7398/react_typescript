import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { abouts } from '../data/About';

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <div style={{ display: 'flex' }}>
        <nav style={{ padding: '1rem', borderRight: '1px solid' }}>
          {abouts.map((item) => (
            <Link
              to={item.id.toString()}
              key={item.id}
              style={{ display: 'block', margin: '1rem' }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
