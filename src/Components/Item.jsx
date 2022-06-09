import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
const Item = ({title, image, id}) => {
  const [isVegan, setIsVegan] = useState(false);
  const [sourceUrl, setSourceURL] = useState('');
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=f25c41b6441745159634c8d95ad643ba`)
    .then((res) => {
      setIsVegan(res.data.vegan)
      setSourceURL(res.data.sourceUrl);
    }).catch((err) => {
      console.error(err);
    })
  },[]);
  const handleClick = (e) => {
    window.location.href = sourceUrl;
  }

  return (
    <div style={{backgroundImage: `url(${image})`}} className='Item' id={id} key={id} onClick={handleClick}>
      <p>{title}</p>
      {isVegan ? <p>Vegan</p>: null}
    </div>
  )
}

export default Item;
