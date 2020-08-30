import React from 'react'

export default function SlideInfo() {
  return (
    <section className="container mx-auto">
      <div className="mt-10">
        <h1 className="lato-bold text-4xl flex items-center">
          The One Way Forward
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="currentColor" >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </span>
        </h1>
        <p className="my-6 lato-regular w-1/3">
          Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.
        </p>
        <div className="flex">
          <button class="bg-yellow-400 hover:bg-transparent border border-yellow-400 hover:text-white text-black lato-light py-2 px-4">
            BUY NOW
          </button>
          <button class="ml-6 bg-transparent hover:bg-yellow-400 text-white lato-light hover:text-black py-2 px-4 border border-yellow-400 hover:border-transparent">
            WATCH TRAILER
          </button>
        </div>
      </div>
    </section>
  )
}
