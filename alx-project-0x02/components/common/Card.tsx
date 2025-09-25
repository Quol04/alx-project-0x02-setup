import React from 'react'
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className='mt-4 p-4 bg-blue-50 rounded shadow hover:shadow-lg transition-shadow duration-300'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className='text-gray-700'>{content}</p>
    </div>
  )
}
 export default Card