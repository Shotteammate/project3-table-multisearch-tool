import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <form>
        <input 
          type="text"
          name='country'
          placeholder='Countries...'/>
        <input 
          type="text" 
          name='capital'
          placeholder='Capitals...'/>
        <input 
          type="text" 
          name='region'
          placeholder='Regions...'/>
        <input 
          type="text" 
          name='subregion'
          placeholder='Subregions...'/>
      </form>
    )
  }
}

export default SearchBar
