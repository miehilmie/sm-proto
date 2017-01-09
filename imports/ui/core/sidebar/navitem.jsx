import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const NavItem = ({
    to,
    fa,
    children,
    ...rest
  }) =>
(
  <li className="nav-item">
    <Link {...rest} activeClassName="active" className="nav-link" to={to}><i className={['fa', 'fa-'.concat(fa)].join(' ')} /> <span>{children}</span></Link>
  </li>
);

NavItem.propTypes = {
  fa: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
