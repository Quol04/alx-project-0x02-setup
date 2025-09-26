import React from 'react'
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address, phone }) => {
  return (
    <div className='mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
          User #{id}
        </span>
      </div>

      <h2 className='text-lg font-semibold text-gray-900 mb-3 capitalize'>{name}</h2>
      <p className='text-gray-600 text-sm leading-relaxed'>{email}</p>
     <div className=' flex justify-between mt-4 pt-3 border-t border-gray-100'>
         <h3 className='font-semibold'>{address.city}</h3>
         <p className='text-gray-600 text-sm px-2 rounded-2xl bg-blue-100 leading-relaxed'>{phone}</p>
     </div>
    </div>
  )
}


export default UserCard 