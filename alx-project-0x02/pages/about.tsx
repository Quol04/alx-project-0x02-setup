import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
import React from 'react'


const About = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-8">About Our Button Components</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Featured Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
                Small Button
              </Button>
              <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
                Medium Button
              </Button>
              <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
                Large Button
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">All Size Variations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Small Buttons</h3>
                <div className="flex gap-3">
                  <Button size="small" shape="rounded-sm">Sharp</Button>
                  <Button size="small" shape="rounded-md">Rounded</Button>
                  <Button size="small" shape="rounded-full">Pill</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Medium Buttons</h3>
                <div className="flex gap-3">
                  <Button size="medium" shape="rounded-sm">Sharp</Button>
                  <Button size="medium" shape="rounded-md">Rounded</Button>
                  <Button size="medium" shape="rounded-full">Pill</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Large Buttons</h3>
                <div className="flex gap-3">
                  <Button size="large" shape="rounded-sm">Sharp</Button>
                  <Button size="large" shape="rounded-md">Rounded</Button>
                  <Button size="large" shape="rounded-full">Pill</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default About