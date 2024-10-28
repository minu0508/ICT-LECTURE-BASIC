import React from 'react';

export const Box = React.memo(() => {
  console.log('Render Box');
  const style = {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  };

  return <div style={style} />;
});
