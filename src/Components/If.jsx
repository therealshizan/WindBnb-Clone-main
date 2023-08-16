import React from 'react'

const If = ({condition, children}) => {
  return condition === true ? false : children
}

export default If