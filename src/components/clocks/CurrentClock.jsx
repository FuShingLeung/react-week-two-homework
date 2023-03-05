import React from 'react';

function CurrentClock({
  date = new Date(),
  locale = navigator.languages[0],
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
}) {
  options.timezone = timezone;
  const formatter = Intl.DateTimeFormat(locale, options);
  return (
    <>
      <div>
        {timezone} ({locale})
      </div>
      <div>{formatter.format(date)}</div>
    </>
  );
}

export default CurrentClock;
