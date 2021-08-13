import React from "react"
import { shelves } from "../utils/global";
import { toCamelCase } from "../utils/helpers";

// Controlled Dropdown Component which allows us to update the value attribute on the select tag in one place
class Dropdown extends React.Component {
    state = {
        selectedVal: this.props.defaultShelf
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <select value={this.state.selectedVal} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                {shelves.map(shelf => 
                    <option value={toCamelCase(shelf)}>{shelf}</option>
                )}
                <option value="none">None</option>
            </select>
        )
    }
}

export default Dropdown