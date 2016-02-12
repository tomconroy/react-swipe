'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactSwipe = require('../react-swipe');

var CustomElement = React.createClass({
  getDefaultProps: function(){ return {style: {}}},
  render: function(){
    return React.createElement('div', {style: this.props.style}, this.props.children)
  }
})

var Panes = Array.apply(null, Array(20)).map(function (_, i) {
  return React.createElement(CustomElement, {key: i},
      React.createElement('b', null, i)
  );
});

var Page = React.createClass({
  next: function () {
    this.refs.ReactSwipe.swipe.next();
  },

  prev: function () {
    this.refs.ReactSwipe.swipe.prev();
  },

  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'ReactSwipe'),
        React.createElement('h2', null, 'Open this page from a mobile device (real or emulated).'),
        React.createElement(ReactSwipe, {
          ref: 'ReactSwipe',
          id: 'mySwipe'
        }, Panes),
        React.createElement('div', {style: {textAlign: 'center'}},
          React.createElement('button', {onClick: this.prev}, 'Prev'),
          React.createElement('button', {onClick: this.next}, 'Next')
        ),
        React.createElement(CustomElement, null, "I shouldn't be styled")
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Page, null),
  document.getElementById('app')
);
