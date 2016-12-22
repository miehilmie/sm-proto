import React, { PropTypes } from 'react';

export function Content(props) {
  return (
    <li className={props.active ? 'active' : ''}><a onClick={props.toggleWarn}>{props.name}</a></li>
  );
}

Content.propTypes = {
  active: PropTypes.bool,
  toggleWarn: PropTypes.func,
  name: PropTypes.string.isRequired,
};
