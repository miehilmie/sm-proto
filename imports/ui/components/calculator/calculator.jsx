import React from 'react';
import BoilingVerdict from './boilingVerdict.jsx';
import TemperatureInput from './temperatureInput.jsx';


function toCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return ((celsius * 9) / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);

  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { value: '', scale: 'c' };
  }

  handleCelciusChange(value) {
    this.setState({ scale: 'c', value });
  }

  handleFahrenheitChange(value) {
    this.setState({ scale: 'f', value });
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelcius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return (
      <div>
        <TemperatureInput scale="c" value={celsius} onChange={this.handleCelciusChange} />
        <TemperatureInput scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    );
  }
}