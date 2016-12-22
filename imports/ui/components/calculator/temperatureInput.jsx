import React, { PropTypes } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const value = this.props.value;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={value}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

TemperatureInput.propTypes = {
  value: PropTypes.string.isRequired,
  scale: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TemperatureInput;
