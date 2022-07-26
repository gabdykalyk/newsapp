import React from 'react'

const NewsImage = (props) => {
  return(
    <div>
      <img src={require(`../../../../public/system/dragonfly/development/${props.attributes.image_uid}`)} alt="" />
    </div>
  )
}

export default NewsImage;