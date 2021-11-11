import React from 'react';

const EditButton = (props) => {
  return (
    <button onClick={props.onClick} id={props.name} className={props.className}>
      {props.text}
    </button>
  );
};
export default EditButton;
