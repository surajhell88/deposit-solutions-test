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
          className="form-search"
        >
          <input
            className="search-box"
            type="text"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            placeholder="Search and hit Enter"
            name="search-box"
            autoComplete="off"
            ref={this.inputRef}
          />
        </form>
      </div>
    );
  }
}

ActionHeader.propTypes = {
  searchIssues: PropTypes.func
};

export default ActionHeader;
