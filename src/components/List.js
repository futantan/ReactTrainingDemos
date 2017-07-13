import * as React from "react";
import Item from "./Item";


//TODO: toggleTodo
const List = (props) => (
  <ul>
    {
      props.items.map((item, index) =>
        <Item
          className={item.status === 'completed' ? 'cross-line' : ''}
          key={index}
          uuid={index}
          content={item.content}
          onItemClick={(index) => props.toggleTodo(index)}
        />
      )
    }
  </ul>
);

export default List