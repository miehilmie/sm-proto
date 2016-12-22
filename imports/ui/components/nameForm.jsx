import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      select: 'mango',
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, key) {
    console.log(event.target.value);
    const object = {};
    object[key] = event.target.value;
    this.setState(object);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input id="emailInput" type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input id="passwordInput" type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <select className="form-control" value={this.state.select} onChange={e => this.handleChange(e, 'select')}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }

}

export default NameForm;
