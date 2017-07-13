import * as React from "react";

const Filter = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      {
        props.filters.map((filter, index) => (
          <a
            key={index}
            href="#"
            onClick={(evt) => props.onFilterClick(evt, filter.condition)}
          >
            {filter.msg}
          </a>
        ))
      }
    </div>
  )
};

export default Filter;