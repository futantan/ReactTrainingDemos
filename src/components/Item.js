import * as React from "react";

const Item = (props) => (
  <li
    className={props.className}
    onClick={() => props.onItemClick(props.uuid)}
  >
    {props.content}
  </li>
);

export default Item