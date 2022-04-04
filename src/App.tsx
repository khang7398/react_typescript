import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
// import Form from './component/Form';
// import List from './component/List';

const Form = React.lazy(() => import('./component/Form'));
const List = React.lazy(() => import('./component/List'));

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

      console.log(data);

      setDataUser(data);
      console.log('check data user', dataUser);
    }
    fetchData();
  }, []);

  const deleteUser = (id: number): void => {
    const currentList = dataUser.filter((item): any => item.id !== id);
    setDataUser(currentList);
  };
  return (
    <React.Suspense fallback={<p>Loading....</p>}>
      <div className="container">
        <Form dataUser={dataUser} setDataUser={setDataUser} />
        <List dataUser={dataUser} deleteUser={deleteUser} />
      </div>
    </React.Suspense>
  );
}
