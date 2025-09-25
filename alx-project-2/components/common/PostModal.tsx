import { CardProps } from '@/interfaces'
import React from 'react'

const PostModal : React.FC< CardProps> = ({title, content}) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input 
          type="text" 
          id="title" 
          value={title}
          placeholder='Enter the Title' />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea 
            value={content}
            id="content" 
            placeholder='Enter the Content'></textarea>
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Submit</button>
        </div>
       </form>
    </div>
  )
}

export default PostModal