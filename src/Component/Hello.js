import React from "react";

function Child1() {
  return <p>1. 함수 선언</p>;
}

const Child2 = () => {
  return <p>2. 함수 화살표 표현</p>;
};

const Child3 = () => <p>3. 화살표 한줄</p>;

const Hello = () => {
  return (
    <div>
      <h3> Hello, React</h3>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  );
};

export default Hello;
