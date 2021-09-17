import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Hello from "./Component/Hello";
import HelloProps from "./Component/HelloProps";
import Profile from "./Profile";
import MyName from "./MyName";
import MyComponent from "./Component/MyComponent";

const cho = {
  name: "yearim",
  age: 24
};

const joo = {
  name: "jin",
  age: 19
};

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="hello" children="child" favoriteNumber={1} />
        <Header title="함수형 컴포넌트" />
        <Hello />
        <MyName />
        <MyName name="input name" />
        <HelloProps name=" yearim" />
        <Profile data={cho} />
        <Profile data={joo} />
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header title="클래스 컴포넌트" />
//         <Hello />
//       </div>
//     );
//   }
// }

export default App;
