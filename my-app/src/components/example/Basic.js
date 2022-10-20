import React from 'react';

function Hello(props) {
  return <div>Hello, {props.usrType}</div>
}

function HelloWorld() {
  return <Hello usrType='Guest' />
}
