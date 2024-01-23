import React, { Component, useState } from 'react'
import CommonProps from './CommonProps'

function LikeImageProps() {
  return (
    <CommonProps>
      {
        ({like,handleLike}) => {
          <button onClick={handleLike}>Like Image {like}</button>
        }
      }
    </CommonProps>
  )
}

export default LikeImageProps