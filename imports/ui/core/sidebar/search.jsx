import React, {Component, PropTypes} from 'react';

class Search extends Component {
  render() {
    return (
      <input type="text" placeholder="Search..." onChange={this.props.search} className="sidebar-search form-control" />
    );
  }
}

Search.propTypes = {

};

export default Search;
