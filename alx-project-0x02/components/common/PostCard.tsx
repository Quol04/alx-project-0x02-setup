import React from 'react'
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className='mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
          Post #{id}
        </span>
        <span className="text-xs text-gray-500">
          User {userId}
        </span>
      </div>
      
      <h2 className='text-lg font-semibold text-gray-900 mb-3 capitalize'>{title}</h2>
      <p className='text-gray-600 text-sm leading-relaxed'>{content}</p>
      
      {/* <div className="mt-4 pt-3 border-t border-gray-100">
        <button onClick={() => {}} className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
          Read More →
        </button>
      </div> */}
    </div>
  )
}
 export default PostCard