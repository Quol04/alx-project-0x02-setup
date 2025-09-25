import React from 'react'
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold"> This is the Home Page</h1>
        <Card title="Card Title" content="This is the card content." />
        <Card title="Card Sub Title" content="This is the card subtitle content." />
      </main>
    </div>
  )
}

export default Home