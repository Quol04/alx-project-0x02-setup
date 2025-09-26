import { type ButtonProps } from '@/interfaces'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  const buttonClasses = `
    ${sizeClasses[size]} 
    ${shapeClasses[shape]} 
    bg-blue-600 text-white font-medium 
    hover:bg-blue-700 active:bg-blue-800 
    transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    cursor-pointer inline-flex items-center justify-center
  `.trim().replace(/\s+/g, ' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {children || `${size} ${shape}`}
    </button>
  )
}

export default Button