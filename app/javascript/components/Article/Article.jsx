import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsImage from './NewsImage'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


const Article =()=> {
  const [article, setArticle] = useState({})
  const [loaded, setLoaded] = useState(false)

  const locationhref = ((location.href).split('/'))

  useEffect(()=>{

    const url = `/articles/${locationhref[locationhref.length -1]}.json`
    
    axios.get(url)
    .then( resp => {
      setArticle(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='article-item col-md-7 mt-4 p-5 bg-light text-dark rounded'>
          <h2 className='text-center'>
            {article.title}
          </h2>
          <div className='text-center mt-4'>
            { loaded &&
              <NewsImage attributes={article} />
            }
          </div>
          <div className='mt-4 fs-4'>
            {article.description}
          </div>
          <div className='text-center'>
          <Link className='mt-4 btn btn-dark' to={`/client`}>Вернуться к новостям</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;
