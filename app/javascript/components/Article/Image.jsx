import React from 'react'

const Image = (props) => {
  return(
    <div>
      <img src={require(`../../../../public/system/dragonfly/development/${props.attributes.image_uid}`)} alt="" />
    </div>
  )
}

export default Image;