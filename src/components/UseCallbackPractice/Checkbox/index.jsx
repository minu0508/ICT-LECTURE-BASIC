import React from 'react';

export const Checkbox = React.memo(({ label, on, onChange }) => {
  return (
    <>
      <label>
        {label}
        <input type="checkbox" defaultChecked={on} onChange={onChange} />
      </label>
    </>
  );
});
