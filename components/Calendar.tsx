'use client'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Value = Date | null;


const Home = () =>  {

  const [value] = useState<Value>(new Date());
  const onChange = (value: Value, event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    if (value === null) {
      return;
    }
    
    console.log(value.getFullYear());
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value} locale="en-CA" />
    </div>
  );
}

export default Home;