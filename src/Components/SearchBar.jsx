import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
const API_KEY = 'f25c41b6441745159634c8d95ad643ba';
const SearchBar = ({setListItem}) => {
  const [input, setInput] = useState('');
  const firstUpdate = useRef(true);
  useEffect(() => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
    }
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${input}`)
    .then((res) => {
      setListItem(res.data.results)
    })
    .catch((err) => {
      console.error(err);
    })
  }, [input])

  return (
    <div>
      <input placeholder='Search' onChange={(e) => {setInput(e.target.value)}}/>
    </div>
  )
}

export default SearchBar