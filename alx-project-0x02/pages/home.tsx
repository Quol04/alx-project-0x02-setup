import React, { useState } from 'react'
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';
import { type CardProps } from '@/interfaces';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleAddPost = () => {
    setIsModalOpen(true);
  }

  const handleSubmit = (post: CardProps) => {
    setPosts([...posts, post]);
    setIsModalOpen(false);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold"> This is the Home Page</h1>
        <button onClick={handleAddPost} className="mt-4 p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-900">Add a Post</button>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))
          ) : (
            <p className="text-gray-500 col-span-3">No posts yet. Add your first post!</p>
          )}
        </div>
        
        {isModalOpen && (
          <PostModal 
            onSubmit={handleSubmit}
            onClose={handleCloseModal}
          />
        )}
      </main>
    </div>
  )
}

export default Home