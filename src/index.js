/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title(props) {
  return (
    <div>
      <h2>정말 동작 할까?</h2>
      <p>잘 동작하는지 보고 싶다.</p>
    </div>
  );
}

// 사용자가 생성한 컴포넌트는 대문자로 시작,
// HTML 기본 엘리먼트는 소문자로 시작하는 react 자체 규칙이 존재함.
// 대문자로 시작하는 엘리먼트는 함수 호출로 변경된다.
render(<Title />, document.querySelector("#root"));
