import React, { PropTypes } from 'react';

const Search = props => (
  <input type="text" placeholder="Search..." onChange={props.search} className="sidebar-search form-control" />
);

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
