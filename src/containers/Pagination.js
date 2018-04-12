import { connect } from "react-redux";

import actions from "../actions";
import Pagination from "../components/Pagination";

const mapStateToProps = ({ app: { issues: { pagination } } }) => ({
  currentPage: pagination.currentPage,
  totalPages: pagination.last && parseInt(pagination.last.page),
  nextPage: pagination.next && parseInt(pagination.next.page),
  prevPage: pagination.prev && parseInt(pagination.prev.page)
});

const mapDispatchToProps = dispatch => ({
  newPage: page => dispatch(actions.issues.get(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
