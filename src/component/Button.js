import React from 'react';


const Button = (props) => {
    console.log('Button app running');
  return (
    <div>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default React.memo(Button) ;
