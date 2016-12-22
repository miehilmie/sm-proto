import React from 'react';
import { WarningBanner } from './warningBanner.jsx';
import { Content } from './content.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: new Date(),
      warn: false,
    };
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      nama: new Date(),
    });
  }

  toggleWarn(event) {
    event.preventDefault();
    this.setState({
      warn: !this.state.warn,
    });
  }

  render() {
    return (
      <div className="container">
        <WarningBanner warn={this.state.warn} toggleWarn={e => this.toggleWarn(e)} />
        <ul className="nav nav-pills">
          <Content name={this.state.nama.toLocaleTimeString()} active={true} toggleWarn={e => this.toggleWarn(e)} />
          <Content name={this.state.nama.toLocaleTimeString()} />
          <Content name={this.state.nama.toLocaleTimeString()} />
        </ul>
      </div>
    );
  }
}

export default App;
