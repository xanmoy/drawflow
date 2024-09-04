import { FileListContext } from '@/app/_context/FilesListContext'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Archive, MoreHorizontal } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';

export interface FILE {
    archive: boolean,
    createdBt: string,
    document: string,
    fileName: string,
    teamId: string,
    whiteboard: string,
    _id: string,
    _creationTime: number
}
function FileList() {

    const { fileList_, setFileList_ } = useContext(FileListContext);
    const [fileList, setFileList] = useState<any>();
    const { user }: any = useKindeBrowserClient();
    const router = useRouter();
    useEffect(() => {
        fileList_ && setFileList(fileList_);
        console.log(fileList_);
    }, [fileList_])

    return (
        <div className="mt-10 ">
            <div className="overflow-x-auto  scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-800 scrollbar-thumb-rounded">
                <table className="min-w-full divide-y-2 divide-neutral-900 bg-neutral-900 text-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-bold text-neutral-100">File Name</td>
                            <td className="whitespace-nowrap px-4 py-2 font-bold text-neutral-100">Created At</td>
                            <td className="whitespace-nowrap px-4 py-2 font-bold text-neutral-100">Edited</td>
                            <td className="whitespace-nowrap px-4 py-2 font-bold text-neutral-100">Author</td>
                        </tr>
                    </thead>
                    <tbody className="divide-y  divide-neutral-700">
                        {fileList && fileList.map((file: FILE, index: number) => (
                        <tr
                            key={index}
                            className="odd:bg-neutral-800 cursor-pointer "
                            onClick={() => router.push('/workspace/' + file._id)}
                        >
                                <td className="whitespace-nowrap  px-4 py-2 font-medium text-white">
                                    {file.fileName}
                                    
                                </td>
                                <td className="whitespace-nowrap  px-4 py-2 text-white">
                                    {moment(file._creationTime).format('DD MMM YYYY')}
                                
                                </td>
                                <td className="whitespace-nowrap px-4  py-2 text-white">
                                    {moment(file._creationTime).format('DD MMM YYYY')}
                                </td>
                                <td className="whitespace-nowrap  px-4 py-2 text-white">
                                    {user && <Image src={user?.picture}
                                        alt='user'
                                        width={30}
                                        height={30}
                                        className='rounded-full' />}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 border-none text-white">
                                    <DropdownMenu >
                                        <DropdownMenuTrigger>
                                            <MoreHorizontal className='border-none outline-none' />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="ml-7 border-none bg-neutral-800 hover:bg-neutral-700 shadow-2xl text-white p-2">
                                            <DropdownMenuItem className='gap-3 arc hover:bg-neutral-700 text-white'>
                                                <Archive className='h-4 w-4 hover:bg-neutral-700 text-white' /> Archive
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                         ))} 
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default FileList