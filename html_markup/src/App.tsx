import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Page1 from './page/page1';
import Page2 from './page/page2';

function App() {
  const [name, setName] = useState("현정민");

  useEffect(() => {
    test();
  }, [name]);

  const test = () => {
    console.log("입력할때마다");
  };
  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p><Link to ="/page1">날짜 출력</Link></p>
          <p><Link to ="/page2">이름 출력</Link></p>
          <Routes>
            <Route path='/page1' element={<Page1 />}></Route>
            <Route path='/page2' element={<Page2 />}></Route>
          </Routes>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
