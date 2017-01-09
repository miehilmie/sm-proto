import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const NavItem = ({
    to,
    fa,
    children,
    ...rest
  }) =>
(
  <Link {...rest} to={to}>
    {({ onClick, href, isActive }) => (
      <li className={['nav-link', isActive ? 'active' : null].join(' ')}>
        <a href={href} onClick={onClick}>
          <i className={['fa', 'fa-'.concat(fa)].join(' ')} /><span>{children}</span>
        </a>
      </li>
    )}
  </Link>
);

NavItem.propTypes = {
  fa: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
