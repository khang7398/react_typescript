import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { homes } from '../data/Home';

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: 'flex' }}>
        <nav style={{ padding: '1rem', borderRight: '1px solid' }}>
          {homes.map((item) => (
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
