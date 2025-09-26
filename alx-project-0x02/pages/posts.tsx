import React from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { type PostProps } from '@/interfaces'

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
        <Header />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-8">Posts</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <PostCard 
                  key={post.id} 
                  title={post.title} 
                  content={post.content} 
                  userID={post.userID} 
                  id={post.id}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No posts available at the moment.</p>
              </div>
            )}
          </div>
        </main>
    </div>
  )
}


export async function getStaticProps() {
    try {
        // Fetch posts data from JSONPlaceholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts: PostProps[] = await response.json();
        
        return {
            props: {
                posts: posts.slice(0, 12), // Limit to first 12 posts for better performance
            },
            revalidate: 3600, // Revalidate every hour
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        
        return {
            props: {
                posts: [], // Return empty array as fallback
            },
            revalidate: 60, // Retry more frequently on error
        };
    }
}
export default Posts