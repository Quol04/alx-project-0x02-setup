import React from 'react'
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <div>
        <h1> This is the Home Page</h1>
        <Card title="Card Title" content="This is the card content." />
        <Card title="Card Sub Title" content="This is the card subtitle content." />


    </div>
  )
}

export default Home