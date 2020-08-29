import React from 'react'
import Clock from './Clock.jsx';

export default function Header() {
  return (
    <header className="container mx-auto">
      <section className="flex justify-between">
        <nav>
          <div className="flex">
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle" width="40" height="40" viewBox="0 0 24 24" stroke-width=".6" stroke="#bfcee2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" fill="#fff" />
              </svg>
            </figure>
            <p className="font-bold text-blue-900 tracking-normal">
              <span className="text-sm">mehedishakb0</span>
              <small className="block text-xs lato-regular">456 Credits</small>
            </p>
          </div>
        </nav>

        <div className="flex text-sm">
          <span>bar icon</span>
          <p className="ml-2"><Clock/></p>
        </div>
      </section>
    </header>
    
  )
}
