/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import '../css/List.css';
import { IPeople } from '../App';

interface IProps {
  people: IPeople[];
}

export default function ({ people }: IProps) {
  return (
    <div className="list-container">
      <h1>List</h1>
      {people.map((item, index) => {
        return (
          <div className="list-item-container" key={item.id}>
            {item.name} - {item.age} - {item.bio}
          </div>
        );
      })}
    </div>
  );
}
