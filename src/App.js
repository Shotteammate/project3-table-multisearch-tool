import React, { Component } from 'react'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      country: '',
      capital: '',
      region: '',
      subregion: '',
      isLoading: true,
    };
  }

  // fetch src data from JSON url (on Github)
  //UNSAFE_componentWillMount()
  componentDidMount() {
    // Where we're fetching data from
    fetch(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          data: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="App">
        <h1>testing</h1>
       
      </div>
    )
  }
}

export default App

// <p>{this.state.data}</p>


