import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
import React from 'react'


const About = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold"> This is the About Page</h1>
        <Button size="medium" shape="rounded-sm" />
        <Button size="medium" shape="rounded-md" />
        <Button size="medium" shape="rounded-full" />

        <Button size="small" shape="rounded-sm" />
        <Button size="small" shape="rounded-md" />
        <Button size="small" shape="rounded-full" />

        <Button size="large" shape="rounded-sm" />
        <Button size="large" shape="rounded-md" />
        <Button size="large" shape="rounded-full" />


      </main>
    </div>
  )
}

export default About