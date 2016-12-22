import React, { PropTypes } from 'react';

export class WarningBanner extends React.Component {
  render() {
    if (!this.props.warn) {
      return null;
    }

    return (
      <div className="alert alert-warning">
        Warning! <button onClick={this.props.toggleWarn} className="close">X</button>
      </div>
    );
  }


}

WarningBanner.propTypes = {
  warn: PropTypes.bool.isRequired,
  toggleWarn: PropTypes.func.isRequired,
};
