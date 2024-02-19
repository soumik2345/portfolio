import React from 'react';
import './Msg.css';

const Msg = ({msg}) => {
  return( 

    msg &&  <div className={`msg ${msg.type}`}>
          <h1>{msg.message}</h1>
      </div>
  );
};

export default Msg;
