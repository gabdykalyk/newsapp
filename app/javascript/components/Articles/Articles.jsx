import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Article from './Article'
import Header from '../Header/Header'

const Articles =()=> {

  const [articles, setArticles] = useState([])

  useEffect(()=>{

    axios.get('/articles.json')
    .then( resp =>{
      setArticles(resp.data)
    })
    .catch( resp => console.log(resp) )
  }, [articles.lengh])

  const sortArticles = () => {
    const articlessorted = articles.sort((a,b) => new Date(...a.created_at.slice(0,9).split('-').reverse()) - new Date(...b.created_at.slice(0,9).split('-').reverse()))
    console.log(articlessorted)
  }

  const article = articles.map( item => {
    return(
      <Article 
        attributes={item}
      /> 
     )
  })



  return (
    <div>
      <Header />
      {console.log(articles)}
      {article}
      <button onClick={sortArticles}>Нажми на меня</button>
    </div>
  )
}

export default Articles;