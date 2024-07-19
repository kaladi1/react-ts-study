import React, { useEffect, useState } from 'react';

const Page2 = () => {
  const [name, setName] = useState("현정민");

  const handleClick = () => {
    alert(`${name} 입니다.`);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>이름 출력하기</h1>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Page2;