import React from "react";
import PropTypes from "prop-types";
import getQueryParams from "../utils/query-params";

class ActionHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: getQueryParams("q")
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div className="action-header">
        <form className="form-search apply-flex gray-border">
          <input
            className="search-box apply-flex-one no-border"
            type="search"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            placeholder="Search and hit &#9166;"
            name="q"
            autoComplete="off"
            ref={this.inputRef}
          />
          <input type="submit" value="Search" className="no-border" />
        </form>
      </div>
    );
  }
}

export default ActionHeader;
