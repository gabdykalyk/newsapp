import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Article from './Article'
import Header from '../Header/Header'

const Articles =()=> {

  const [articles, setArticles] = useState([])

  const [toggle, setToggle] = useState(false)


  useEffect(()=>{

    axios.get('/articles.json')
    .then( resp =>{
      setArticles(resp.data)
    })
    .catch( resp => console.log(resp) )
  }, [articles.lengh])

  const article = articles.map( item => {
    return(
      <Article 
        attributes={item}
      /> 
     )
  })


  let articlessorted = [...articles]
  articlessorted = articlessorted.sort((a,b) => new Date(...a.created_at.slice(0,10).split('-').reverse()) - new Date(...b.created_at.slice(0,10).split('-').reverse()))

  const sorted = articlessorted.map( item => {
    return(
      <Article
        attributes={item}
      />
    )
  })

  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <button className='btn btn-primary' onClick={() => setToggle(!toggle)}>Сортировать по дате</button>
      </div>
      <div className={toggle ? 'hidden' : 'visible'}>
        {article}
      </div>
      <div className={toggle ? 'visible' : 'hidden'}>
        {sorted}
      </div>
    </div>
  )
}

export default Articles;