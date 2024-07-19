import React, { useState } from 'react';

const Page1 = () => {
  const [date, setDate] = useState<string>('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <h1>날짜 선택 하기</h1>
      <input type="date" value={date} onChange={handleDateChange} />
      <p>선택한 날짜는 : {date}</p>
    </div>
  );
}

export default Page1;