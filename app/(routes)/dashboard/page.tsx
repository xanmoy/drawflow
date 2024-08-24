"use client"
import { LogoutLink,  } from "@kinde-oss/kinde-auth-nextjs/components";
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";


function Dashboard() {
  const {user}:any = useKindeBrowserClient() 

  const getUser=useQuery(api.user.getUser,{email:user?.email})

  useEffect(() => {
    if (user) {
      console.log(getUser)
    }
  },[user])
  return (
    <div>
      <LogoutLink>
        <Button>Log out</Button>
        
      </LogoutLink>
    </div>
  )
}

export default Dashboard
