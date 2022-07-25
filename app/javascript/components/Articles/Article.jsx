import React from 'react'
import styles from './Article.module.css'
import { Link } from 'react-router-dom'

const Article = (props) => {


  return(
    <div className='container'>
      <div className='article-item col-md-7 mt-4 p-5 bg-light text-dark rounded'>
        <h2 className='text-center'>
          {props.attributes.title}
        </h2>
        <div className='text-center mt-4'>
          <img src={require(`../../../../public/system/dragonfly/development/${props.attributes.image_uid}`)} alt="" />
        </div>
        <div className='mt-4 fs-4'>
          {props.attributes.description}
        </div>
        <Link to={`/client/${props.attributes.id}`}>View News</Link>
      </div>
    </div>
  )
}

export default Article;