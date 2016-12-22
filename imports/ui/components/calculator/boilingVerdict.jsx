import React, { PropTypes } from 'react';

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

BoilingVerdict.propTypes = {
  celsius: PropTypes.isRequired,
};

export default BoilingVerdict;
