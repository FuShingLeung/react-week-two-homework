import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import CurrentClock from './CurrentClock';

function ClocksList({ timezones = [], locales = [] }) {
  const [clocksList, setClocksList] = useState(() => {
    const clocksList = [];

    for (const timezone of timezones) {
      for (const locale of locales) {
        clocksList.push({ timezone, locale });
      }
    }
    console.log(clocksList);

    return clocksList;
  });

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setDate(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <ul>
      {clocksList.map((props) => (
        <li key={nanoid()}>
          <CurrentClock {...props} date={date} />
        </li>
      ))}
    </ul>
  );
}

export default ClocksList;
