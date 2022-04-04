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
    setDataUser([
      ...dataUser,
      {
        id: Number(inputData.id),
        first_name: inputData.first_name,
        last_name: inputData.last_name,
        email: inputData.email,
      },
    ]);
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
