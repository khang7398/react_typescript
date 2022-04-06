import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homes from './Page/Homes';
import Abouts from './Page/Abouts';
import Contact from './Page/Contact';
import NotFound from './Page/NotFound';
import Home from './Page/Home';
import About from './Page/About';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Homes />}>
            <Route index element={<h2 style={{ padding: '1rem' }}>Please Select Home Page</h2>} />
            <Route path=":homeId" element={<Home />} />
          </Route>
          <Route path="about" element={<Abouts />}>
            <Route path=":aboutId" element={<About />} />
          </Route>
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
