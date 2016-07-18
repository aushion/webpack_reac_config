import React from 'react';
var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    var style = {
      fontSize:22,
      fontFamily:'微软雅黑',
      fontWeight:'bold',
      opacity:this.state.opacity
    };
    return (
      <div style={style}>
          Hello world 
      </div>
    );
  }
});
export default Hello;
