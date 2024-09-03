"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

function CreateTeam() {

  const [teamName, setTeamName] = useState('');
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();
  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email
    }).then(resp => {
      console.log(resp);
      if (resp) {
        router.push('/dashboard')
        toast('Team created successfully!!!')
      }
    })
  }
  return (
    <div className='bg-neutral-900 text-white px-6 md:px-16 my-16'>
      <a className="flex text-white " href="/">
        <Image src="/logo.svg" alt="DrawFlow" width={50} height={50} />
        <h1 className="pl-2 font-bold text-lg text-white">DrawFlow</h1>
      </a>
      <div className='flex flex-col items-center mt-48'>
        <h2 className='font-bold text-[40px] py-3'>What should we call your team?</h2>
        <h2 className='text-gray-500'>You can always change this later from settings.</h2>
        <div className='mt-7 lg:w-[20%] md:w-[60%] w-[65%]'>
          <label className='text-gray-500'>Team Name</label>
          <Input placeholder='Team Name'
            className='mt-3 p-4'
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button className='bg-indigo-600 mt-9 lg:w-[20%] md:w-[60%] sm:w-[60%] w-[65%] hover:bg-indigo-800'
          disabled={!(teamName && teamName?.length > 0)}
          onClick={() => createNewTeam()}
        >Create Team</Button>
      </div>
    </div>
  )
}

export default CreateTeam