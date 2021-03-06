// function hook 관련 부분은 구현안함.

export class Component {
  // empty
  // JavaScript 는 function과 class 를 구분할 수 없어서(typeof 결과가 둘 다 function),
  // 상속 후 prototype 확인으로 클래스임을 확인한다.
}

function renderRealDOM(vdom) {
  // 자식이 없는 경우
  if (vdom === undefined) return;

  // 마지막 요소는 text node 라서 출력할 문자열임.
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(renderRealDOM).forEach((node) => {
    $el.appendChild(node);
  });
  return $el;
}

export const render = (function () {
  // 기존 dom 과의 비교를 위해서 closure 로 만들어서 상태 저장
  let prevVdom = null;
  return function (nextVdom, container) {
    // 기존 dom 과 virtual dom 의 상태를 비교
    container.appendChild(renderRealDOM(nextVdom));
  };
})();

export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    if (tagName.prototype instanceof Component) {
      const instance = new tagName({ ...props, children });
      return instance.render();
    } else {
      return tagName.apply(null, [props, ...children]);
    }
  }
  return {
    tagName,
    props,
    children,
  };
}
