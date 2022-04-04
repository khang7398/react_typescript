import React, { useState } from 'react';
import '../css/List.css';
import { IUser } from '../App';

interface IProps {
  dataUser: IUser[];
  deleteUser(id: number): void;
}

export default function List({ dataUser, deleteUser }: IProps) {
  return (
    <div className="list-container">
      <h1>List</h1>
      {dataUser.map((item, index) => {
        return (
          <div className="list-item-container" key={index}>
            <div className="user">
              {item.first_name} - {item.last_name} - {item.email}
            </div>
            <button type="button" onClick={() => deleteUser(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
