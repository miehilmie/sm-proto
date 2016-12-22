import React, { PropTypes } from 'react';

const FancyBorder = props => (
  <div className={'Fancyborder Fancyborder-'.concat(props.color)}>
    {props.children}
  </div>
);

FancyBorder.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FancyBorder;
