import React from 'react'
import styles from './Article.module.css'
import { Link } from 'react-router-dom'
import NewsImage from '../Article/NewsImage'

const Article = (props) => {

    return(
      <div className='container'>
        <div className='article-item col-md-7 mt-4 p-5 bg-light text-dark rounded'>
          <h2 className='text-center'>
            {props.attributes.title}
          </h2>
          <div className='text-center mt-4'>
            <NewsImage attributes={props.attributes} />
          </div>
          <div className='mt-4 fs-4'>
            {props.attributes.description}
          </div>
          <div className='mt-4 fs-6'>
            Дата публикации: {props.attributes.created_at.slice(0,10).split("-").reverse().join(".")}
          </div>
          <div className='text-center'>
          <Link className='mt-4 btn btn-dark' to={`/client/${props.attributes.id}`}>Показать новость</Link>
          </div>
        </div>
      </div>
  )
}

export default Article;