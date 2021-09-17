import React, { Component } from "react";
import PropTypes from "prop-types";

// const MyComponent = ({ name, children }) => {
class MyComponent extends Component {
  static defaultProps = {
    name: "default name"
    // favoriteNumber: 0
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  // const MyComponent = (props) => {
  //   const { name, children } = props;
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hello, My name is {name} <br />
        children : {children}! <br />
        My favorite number is {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
