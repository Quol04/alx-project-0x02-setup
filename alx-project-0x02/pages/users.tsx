import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps , UserPageProps } from '@/interfaces'
import React from 'react'


const users: React.FC <UserPageProps> = ({posts}) => {
  return (
    <div>
        <Header/>
        <div className='p-4 '>
            <h1 className='text-2xl font-bold'> Users List</h1>
            <main className='p-4'>
                <div className='grid grid-cols-3 gap-4 p-4'>
                    {posts?.map((post:UserProps) => (
                    <UserCard 
                        key={post.id} 
                        name={post.name} 
                        // username={post.username} 
                        email={post.email}
                        id={post.id}
                        address={post.address}

                        phone={post.phone}
                    //    {...post} 
                    />
                    ))}
                </div>
            </main>
        </div>
    </div>
  )
}


export async function getStaticProps(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const posts = await response.json();

    return {
        props: {
            posts,
        }
    }
}
export default users