import axios from 'axios';
import React, { useState } from 'react';
import { IUser } from '../App';
import '../css/Form.css';
interface IProps {
  dataUser: IUser[];
  setDataUser: React.Dispatch<React.SetStateAction<IUser[]>>;
}
export default function Form({ dataUser, setDataUser }: IProps) {
  const [inputData, setInputData] = useState({ id: '', first_name: '', last_name: '', email: '' });

  const handlOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handlOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function fetchData() {
      let res = await axios.post('https://reqres.in/api/users', inputData);
      let data = res && res.data ? res.data : [];

      setDataUser([...dataUser, data]);
    }
    fetchData();
    setInputData({ id: '', first_name: '', last_name: '', email: '' });
  };

  return (
    <div className="form-container">
      <h1>Form</h1>
      <form onSubmit={handlOnSubmit}>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
          onChange={handlOnChange}
          value={inputData.first_name}
        />
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last Name"
          onChange={handlOnChange}
          value={inputData.last_name}
        />
        <input
          name="email"
          id="email"
          placeholder="Email"
          onChange={handlOnChange}
          value={inputData.email}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
