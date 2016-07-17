import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render:function(){
    return <h1>Hello chenaosheng</h1>
  }
})

export default Hello;
ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
