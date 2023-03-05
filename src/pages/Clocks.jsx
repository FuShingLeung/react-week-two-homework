import React from 'react';

import ClocksList from '../components/clocks/ClocksList';

const timezones = ['London', 'Korea', 'Egypt'];
const locales = ['en-GB', 'ko-KR', 'ar-EG'];

function Clocks() {
  return (
    <>
      <div>
        <ClocksList timezones={timezones} locales={locales} />
      </div>
    </>
  );
}

export default Clocks;
