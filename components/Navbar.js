import Image from 'next/image';
import logo from '../images/linkedIn.png';

import { HomeIcon, SearchIcon, UserGroupIcon, BriefcaseIcon, ChatAltIcon, BellIcon } from '@heroicons/react/solid'


function Navbar() {
    

    return (
        <div className="container bg-white p-1">
            <div className="flex justify-between ">
                <div className="flex space-x-3">
                    <Image src={logo} width={40} height={45} />
            
                    <div className=" cursor-pointer ">
                        <SearchIcon className="h-10 w-7 " />
                        <p className="hidden md:block text-gray-400 text-sm  ">Search</p>
                    </div>
                </div>
                <div className="flex space-x-10 justify-center">
                    <div className="cursor-pointer">
                        <HomeIcon className="h-10 w-7 " />
                        <p className="hidden md:block text-gray-400 text-sm" >Home</p>
                    </div>
                    <div className="cursor-pointer">
                        <UserGroupIcon  className="h-10 w-7 " />
                        <p className="hidden md:block text-gray-400 text-sm">My Networks</p>
                    </div>
                    <div className="cursor-pointer">
                        <BriefcaseIcon className="h-10 w-7 " />
                        <p className="hidden md:block text-gray-400 text-sm">Jobs</p>
                    </div>
                    <div className="cursor-pointer">
                        <ChatAltIcon className="h-10 w-7 "/>
                        <p className="hidden md:block text-gray-400 text-sm">Messages</p>
                    </div>
                    <div className="cursor-pointer">
                        <BellIcon className="h-10 w-7 " />
                        <p className="hidden md:block text-gray-400 text-sm">Notifications</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
