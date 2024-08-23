// 'use Client'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from 'react'
import { Button } from '@/components/ui/button'

function Dashboard() {
  return (
    <div>
      <LogoutLink>
        <Button>Log out</Button>
        
      </LogoutLink>
    </div>
  )
}

export default Dashboard
