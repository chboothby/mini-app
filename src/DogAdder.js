import React from 'react';

class DogAdder extends React.Component {
  state = {
    name: '',
    age: '',
    mileage: '',
    picture: '',
    id: this.props.count
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDog(this.state);
    this.setState({
      name: '',
      age: '',
      mileage: '',
      picture: '',
      id: this.props.count + 1
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add new dog</h3>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          ></input>
        </label>
        <label>
          Age:
          <br />
          <input
            type="number"
            min="0"
            name="age"
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
            required
          ></input>
        </label>
        <label>
          Mileage:
          <br />
          <input
            type="number"
            min="0"
            name="mileage"
            placeholder=""
            id="mileage"
            value={this.state.mileage}
            onChange={this.handleChange}
            required
          ></input>
        </label>
        <label>
          Picture:
          <br />
          <input
            type="text"
            min="0"
            name="picture"
            id="picture"
            value={this.state.picture}
            onChange={this.handleChange}
            required
          ></input>
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default DogAdder;
