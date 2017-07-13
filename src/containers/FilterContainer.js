import * as React from "react";
import Filter from "../components/Filter";

class FilterContainer extends React.Component {
  render() {
    return (
      <Filter
        title="Show:"
        filters={[
          { msg: 'All', condition: 'all' },
          { msg: 'Active', condition: 'active' },
          { msg: 'Completed', condition: 'completed' },
        ]}
        onFilterClick={(evt, condition) => {
          evt.preventDefault();
          this.props.onFilterConditionChange(condition);
        }}
      />
    )
  }
}

export default FilterContainer;