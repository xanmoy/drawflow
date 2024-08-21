import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
      <section>
      {/* <section className="bg-neutral-900 text-white"> */}
          <div className='flex items-baseline lg:pt-36 md:pt-16 pt-10 justify-center'>
              <h2 className='text-white border px-3 p-2 rounded-full border-white text-center'>
                 <Link href="/">
                  See What's New | <span className='text-indigo-600'>AI Docs</span>
                  </Link>
              </h2>
          </div>
              <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-fit lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                  <h1
                      className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                  >
                      Docs and Diagrams 

                      <span className="sm:block"> for Your Team </span>
                  </h1>

                  <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                      Centralize all of your scattered docs and diagrams. Build a team knowledge repository with a multiplayer-first tool. Build shared knowledge together.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <a
                          className="block w-full rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-neutral-900 hover:bg-indigo-800 hover:border-indigo-800 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                          href="#"
                      >
                          Get Started
                      </a>

                      <a
                          className="block w-full rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-neutral-900 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                          href="#"
                      >
                          Learn More
                      </a>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Hero
