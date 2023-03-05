import React, { useState } from 'react';

function Controlled() {
  const [value, setter] = useState('start');

  const changeHandler = (e) => setter(e.target.value);
  return <input type="text" value={value} onChange={changeHandler} />;
}

export default Controlled;
