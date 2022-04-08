import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export default function App() {
  const [dataUser, setDataUser] = useState<IUser[]>([]);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('https://reqres.in/api/users?page=1');
      let data = res && res.data.data ? res.data.data : [];

      // console.log(data);

      setDataUser(data);
      // console.log('check data user', dataUser);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Form dataUser={dataUser} setDataUser={setDataUser} />
      <List dataUser={dataUser} setDataUser={setDataUser} />
    </div>
  );
}
