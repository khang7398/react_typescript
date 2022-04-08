import React, { useState } from 'react';
import '../css/List.css';
import { IUser } from '../App';
import axios from 'axios';

interface IProps {
  dataUser: IUser[];
  setDataUser: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export default function List({ dataUser, setDataUser }: IProps) {
  const deleteUser = (id: number) => {
    // error
    // async function fetchData() {
    //   let res = await axios.delete(`https://reqres.in/api/users/${id}`);

    //   console.log(res);
    // }

    // fetchData();

    const currentList = dataUser.filter((item): any => item.id !== id);
    setDataUser(currentList);
  };

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
