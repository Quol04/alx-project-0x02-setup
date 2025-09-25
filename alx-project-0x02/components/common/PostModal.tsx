import { type CardProps, type PostModalProps } from '@/interfaces'
import React, { useState } from 'react'

const PostModal : React.FC<PostModalProps> = ({ onSubmit, onClose }) => {
  const [post, setPost] = useState<CardProps>({title: '', content: ''});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    setPost({ title: '', content: '' });
    onClose();
  }
  return (
    <div className="fixed inset-0 bg-blue-200 bg-opacity-100 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input 
              type="text" 
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              placeholder="Enter the Title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea 
              value={post.content}
              id="content"
              name="content"
              onChange={handleChange}
              placeholder="Enter the Content"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              required
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-200 font-medium">
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostModal