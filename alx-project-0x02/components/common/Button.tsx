import {type ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  return (
    <div className="p-2 m-4 bg-blue-200 rounded">{`Button ${size} and ${shape}`}</div>

  )
}

export default Button