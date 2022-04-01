import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
  password: string;
  email: string;
}
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>React Hook Form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        {...register('name', { required: true })}
      />
      {errors.name && <span className="error-container">Name is required</span>}
      <label htmlFor="name">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        {...register('password', { required: true, minLength: 6 })}
      />
      {errors.password && <span className="error-container">Password is required</span>}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        {...register('email', {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
      />
      {errors.email && <span className="error-container">Email is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
