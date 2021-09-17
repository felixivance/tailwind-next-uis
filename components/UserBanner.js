import felixIcon from "../images/me.jpeg";
import Image from 'next/image';
import { ArrowDownIcon } from "@heroicons/react/solid";

function UserBanner() {
    return (
        <div className="container pt-4 pr-4 pl-4 ">
            <div className="bg-white grid justify-items-center space-y-2 rounded-xl p-5">
       
                <Image src={felixIcon} width={55} height={60} className="rounded-full " />
                <p className="font-bold">Felix Ivance</p>
                <p className="text-gray-500">Full stack web developer</p>
            </div>
            <div className="grid justify-items-center pt-2 hover:bg-gray-200 mt-2 rounded-full mb-2 pb-2">
               <div className="flex space-x-1 ">
                    <p className="">Show More</p>
                    <ArrowDownIcon className="h-5 w-6 pt-1" />
               </div>
            </div>
            
        </div>
    )
}

export default UserBanner
