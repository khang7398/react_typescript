import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';
import './App.css';

export interface IPeople {
  id: number;
  name: string;
  age: number;
  bio: string;
}

export default function App() {
  const [people, setPeople] = useState<IPeople[]>([]);

  return (
    <div className="container">
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
    </div>
  );
}
