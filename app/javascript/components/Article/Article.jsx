import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Image from './Image'

const Article =()=> {
  const [article, setArticle] = useState({})
  const [loaded, setLoaded] = useState(false)

  const locationhref = location.href

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
    <div className='container'>
      <div className='article-item col-md-7 mt-4 p-5 bg-light text-dark rounded'>
        <h2 className='text-center'>
          {article.title}
        </h2>
        <div className='text-center mt-4'>
          { loaded &&
            <Image attributes={article} />
          }
        </div>
        <div className='mt-4 fs-4'>
          {article.description}
        </div>
        {/* <Link to={`/client/${props.attributes.id}`}>View News</Link> */}
      </div>
    </div>
  )
}

export default Article;
