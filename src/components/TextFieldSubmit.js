import React from "react";

class TextFieldSubmit extends React.Component {
  state = {
    value: ''
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={(evt) => {
            this.setState({ value: evt.target.value });
          }}
        />
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault();
            if (this.state.value.trim() === '') return;
            this.props.handleSubmit(this.state.value);
            this.setState({ value: '' });
          }}
        >
          Add Todo
        </button>
      </form>
    )
  }
}

export default TextFieldSubmit