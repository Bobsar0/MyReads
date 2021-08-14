import React from "react";
import { shelves } from "../utils/globals";
import { toCamelCase } from "../utils/helpers";
import PropTypes from "prop-types";

/**
 * Controlled Dropdown component which allows React to control the update to the selected shelf value
 * This represents the dropdown of a list of shelves associated with a book
 */
class Dropdown extends React.Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired,
  };

  // Initialize selected shelf with the defaultShelf passed down from parent component
  state = {
    selectedShelf: this.props.defaultShelf,
  };

  // Update the value of selectedShelf when an option is selected
  // and pass the updated value to the onUpdateShelf func props passed down from parent component
  handleChange = (event) => {
    this.setState({ selectedShelf: event.target.value });
    this.props.onUpdateShelf(event.target.value);
  };

  render() {
    return (
      <select value={this.state.selectedShelf} onChange={this.handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map((shelf) => (
          <option key={shelf} value={toCamelCase(shelf)}>
            {shelf}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    );
  }
}

export default Dropdown;
