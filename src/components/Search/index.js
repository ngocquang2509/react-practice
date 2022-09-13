import React from 'react'
import * as SC from './style' // SC is stands for Styled-Components

const Search = ({ handleChange }) => {
  return <SC.SearchBar type="text" placeholder="Search product..." onChange={handleChange} />
}

export default Search
