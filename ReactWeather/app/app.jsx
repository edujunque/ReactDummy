var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Dudy',
  location: 'Campinas'
};

var objTwo = {
  age: 29,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>React BoilerPlate</h1>,
  document.getElementById('app')
);
