import { CardProps } from '@/interfaces'
import React from 'react'

const PostModal : React.FC< CardProps> = ({title, content}) => {
  return (
    <div>
        <form action="">
            <h2>{title}</h2>
            <p>{content}</p>
            <input type="text" placeholder='Title' />
            <textarea placeholder='Content'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PostModal