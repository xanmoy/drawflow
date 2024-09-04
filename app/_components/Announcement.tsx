import React from 'react'
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

function Announcement() {
  return (
      <div className="bg-indigo-600 px-4 py-3 text-white">
          <p className="text-center font-semibold  text-sm">
              Try DrawFlow Beta! 
              <span className="inline-block pl-1 underline"> <RegisterLink>Get Started!</RegisterLink> </span>
          </p>
      </div>
  )
}

export default Announcement
