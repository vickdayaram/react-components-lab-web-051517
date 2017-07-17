// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {

  render(){
    const ul = React.createElement('ul', {},[
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel')
    ])
    return React.createElement('div', {className: 'oldercoaster'},
    [React.createElement('p', {}, 'Two grannies having the time of their life!'),
    React.createElement('p', {}, 'Passengers:'),
    ul])
  }
};


export class InFrontOfYou extends React.Component {

  render(){
    return React.createElement('div', {}, [
      React.createElement('p', {}, `You shouldn't look too far.`),
      React.createElement('p', {}, `Sometimes, the solution is right in front of you.`)
    ])
  }
};

export class ButcherShop extends React.Component {

  render(){
    const butcherLi = BUTCHER_PRODUCTS.map((product) => React.createElement('li', {}, product))
    const p = React.createElement('p', {}, 'Hello! We have the following products for sale today:')
    const ul = React.createElement('ul', {}, butcherLi)
    return React.createElement('div', {className: 'butcher-shop'}, [
      p, ul
    ])
  }
};


ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
