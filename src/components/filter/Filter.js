import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
