import React from 'react'
import Header from '@/components/layout/Header'

const Posts: React.FC = () => {
  return (
    <div>
        <Header />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-8">Posts</h1>
          <p className="text-gray-700">This is the Posts page. More content coming soon!</p>
        </main>
    </div>
  )
}

export default Posts