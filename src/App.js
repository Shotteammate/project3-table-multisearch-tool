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
      .then(data => {
        let array = [];

        for (let i = 0; i < data.length; i++) {
          let entry = new Object();
          //key value pairs
          entry.country = data[i].name.official;
          entry.capital = data[i].capital;
          entry.region = data[i].region;
          entry.subregion = data[i].subregion;
          // get first child of the languages object
          entry.language = data[i].languages[Object.keys(data[i].languages)[0]];

          array[i] = entry;
        }
        this.setState({
          data: array,
          isLoading: false,
        });
      })

      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>

      </div>
    )
  }
}

export default App

// <p>{this.state.data}</p>


