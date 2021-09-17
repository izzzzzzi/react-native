import React, { Component } from "react";

class MyName extends Component {
  static defaultProps = {
    name: "default name"
  };
  render() {
    return (
      <div>
        hello <b>{this.props.name}</b>
      </div>
    );
  }
}

export default MyName;
