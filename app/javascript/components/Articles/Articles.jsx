import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Article from './Article'

const Articles =()=> {

  const [articles, setArticles] = useState([])

  useEffect(()=>{

    axios.get('/articles.json')
    .then( resp =>{
      setArticles(resp.data)
    })
    .catch( resp => console.log(resp) )
  }, [articles.lengh])

  const grid = articles.map( item => {
    return(
      <Article 
        attributes={item}
      /> 
     )
  })

  return (
    <div>
      {grid}
    </div>
  )
}

export default Articles;