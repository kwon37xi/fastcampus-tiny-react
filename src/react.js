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

export function render(vdom, container) {
  container.appendChild(renderRealDOM(vdom));
}

export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    return tagName.apply(null, [props, ...children]);
  }
  return {
    tagName,
    props,
    children,
  };
}
