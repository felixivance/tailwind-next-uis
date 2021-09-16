import felixIcon from "../images/me.jpeg";
import Image from 'next/image';
import { BookOpenIcon, CalendarIcon, PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";

function PostCommentCard() {
    return (
        <div className="container pl-4 pr-4 pb-4">
            <div className="bg-white p-4 rounded-xl">
                <div className="flex space-x-2">
                    <Image src={felixIcon} width={40} height={40} className="rounded-full " />
                    <input type="text" name="" id="" className="outline-none border-gray-200 border-2 rounded-xl w-full pl-3 h-15" placeholder="start a post"/>
                </div>
                <div className="flex mt-4 justify-evenly">
                  <div className="flex space-x-2">
                    <PhotographIcon className="h-7  text-blue-500"/>
                    <p>Photo</p>
                  </div>
                  <div className="flex space-x-2">
                    <VideoCameraIcon className="h-7 text-green-500"/>
                    <p>Video</p>
                  </div>
                  <div className="flex space-x-2">
                    <CalendarIcon className="h-7 text-red-400"/>
                    <p>Video</p>
                  </div>
                  <div className="flex space-x-2">
                    <BookOpenIcon className="h-7 text-red-500"/>
                    <p>Write Article</p>
                  </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostCommentCard
