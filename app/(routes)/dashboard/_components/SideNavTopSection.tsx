import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from '@/components/ui/separator'
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export interface TEAM {
  createdBy: String;
  teamName: String;
  _id: String;
}
function SideNavTopSection({ user, setActiveTeamInfo }: any) {
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];
  const router = useRouter();
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const [teamList, setTeamList] = useState<TEAM[]>();
  useEffect(() => {
    user && getTeamList();
  }, [user]);

  useEffect(() => {
    // activeTeam ? setActiveTeamInfo(activeTeam) : null;
    setActiveTeamInfo(activeTeam);
  }, [activeTeam]);
  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    console.log("TeamList", result);
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const onMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div
            className="flex items-center gap-3
      hover:bg-neutral-800 p-3 rounded-lg
      cursor-pointer
      "
          >
            <Image src="/logo.svg" alt="DrawFlow" width={50} height={50} />
            <h2
              className="flex gap-2 
                    items-center
      font-bold text-[17px]
      "
            >
              {activeTeam?.teamName}
              
              <ChevronDown />
            </h2>
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 border-none bg-neutral-800 shadow-2xl text-white p-4">
          {/* Team Section  */}
          <div>
            {teamList?.map((team, index) => (
              <h2
                key={index}
                className={`p-2 hover:bg-indigo-700
                         hover:text-neutral-200 font-semibold
                         rounded-lg mb-1 cursor-pointer
                         ${activeTeam?._id == team._id && "bg-indigo-600 text-white"}`}
                onClick={() => setActiveTeam(team)}
              >
                    {team.teamName}
                    
              </h2>
              ))} 
          </div>
          <Separator className='mt-2 bg-zinc-700' />
          {/* Option Section  */}
          <div>
            {menu.map((item, index) => (
              <h2
                key={index}
                className="flex gap-2 items-center
                        p-2 hover:bg-neutral-700/55 rounded-lg cursor-pointer text-sm"
                onClick={() => onMenuClick(item)}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </h2>
            ))}
            <LogoutLink>
              <h2
                className="flex gap-2 items-center
                        p-2 hover:bg-neutral-700/55 rounded-lg cursor-pointer text-sm"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </h2>
            </LogoutLink>
          </div>
                  <Separator className='mt-2 bg-zinc-700' />
          {/* User Info Section  */}
          {user && (
            <div className="mt-2 flex gap-2 items-center">
              <Image
                src={user?.picture}
                alt="user"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div>
                <h2 className="text-[14px] font-bold">
                  {user?.given_name} {user?.family_name}
                </h2>
                <h2 className="text-[12px] text-gray-500">{user?.email}</h2>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* All File Button  */}
      <Button
        
        className="w-full justify-start
          gap-2 font-bold mt-8 bg-neutral-800 hover:bg-neutral-800/50"
      >
        <LayoutGrid className="h-5 w-5" />
        All Files
      </Button>
    </div>
  );
}

export default SideNavTopSection;
