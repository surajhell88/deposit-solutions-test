import React from "react";
import PropTypes from "prop-types";

class ActionHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: ""
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div className="action-header">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.searchIssues(this.state.search);
          }}
          className="form-search apply-flex gray-border"
        >
          <input
            className="search-box apply-flex-one no-border"
            type="search"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            placeholder="Search and hit &#9166;"
            name="search-box"
            autoComplete="off"
            ref={this.inputRef}
          />
          <input type="submit" value="Search" className="no-border" />
        </form>
      </div>
    );
  }
}

ActionHeader.propTypes = {
  searchIssues: PropTypes.func
};

export default ActionHeader;
