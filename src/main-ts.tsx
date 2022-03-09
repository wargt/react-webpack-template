import React from 'react';
import ReactDom from 'react-dom';

type List = {
  op: string
}

const a: List = {
  p: 'd'
}

console.log(a)

ReactDom.render(
  <div>hello ts</div>,
document.querySelector('.app')
)
