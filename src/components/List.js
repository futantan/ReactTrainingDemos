import * as React from "react";
import Item from "./Item";

const List = (props) => (
  <ul>
    {
      props.items.map((item, index) =>
        <Item
          className={item.status === 'completed' ? 'cross-line' : ''}
          key={index}
          uuid={index}
          content={item.content}
          onItemClick={(index) => props.clickItem(index)}
        />
      )
    }
  </ul>
);

export default List