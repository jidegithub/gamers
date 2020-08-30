import React from 'react'
import Clock from './Clock.jsx';

export default function Header() {
  return (
    <header className="container mx-auto">
      <section className="flex justify-between">
        <nav>
          <div className="flex">
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle" width="40" height="40" viewBox="0 0 24 24" strokeWidth=".6" stroke="#bfcee2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" fill="#fff" />
              </svg>
            </figure>
            <p className="font-bold tracking-normal">
              <span className=" flex items-center text-sm">mehedishakb0
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" />
                </svg>
              </span>
              <small className="flex items-center text-xs lato-regular">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler mr-1" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M3.262 10.878l7.991 8.789c.4.44 1.091.44 1.491 0l7.993-8.79c.313-.344.349-.859.087-1.243L17.287 4.44a.996.996 0 00-.823-.436H7.538a.996.996 0 00-.823.436 2713782426.663 2713782426.663 0 01-3.54 5.192c-.263.385-.227.901.087 1.246z" />
                </svg>
                456 Credits</small>
            </p>
          </div>
        </nav>

        <div className="flex items-center text-sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <g transform="rotate(-45 12 18)">
                <line x1="12" y1="18" x2="12.01" y2="18" />
                <path d="M12 14a4 4 0 0 1 4 4" />
                <path d="M12 10a8 8 0 0 1 8 8" />
                <path d="M12 6a12 12 0 0 1 12 12" />
              </g>
            </svg>
          </span>
          <p className="ml-2"><Clock /></p>
        </div>
      </section>
    </header>

  )
}
