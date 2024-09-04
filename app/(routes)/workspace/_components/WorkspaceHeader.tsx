import { Button } from "@/components/ui/button";
import { Link as IconLink, Save } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from 'next/link'


function WorkspaceHeader({ onSave }: any) {
  
  return (
    <div className="p-3 border-b  flex justify-between items-center">
      <div className="flex gap-2 items-center">
       {/* <Image src={"/logo.png"} alt="Logo" height={40} width={40} />
        
        <h2>File Name</h2> */}
        <Image src="/logo.svg" alt="DrawFlow" width={50} height={50} />
        <h1 className="pl-2 font-bold text-lg text-black">DrawFlow</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-[12px]
        gap-2 bg-green-500 hover:bg-green-600"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save{" "}
        </Button>
        <Button
          className="h-8 text-[12px]
        gap-2 bg-indigo-600 hover:bg-indigo-700"
        >
          Share <IconLink className="h-4 w-4" />{" "}
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
