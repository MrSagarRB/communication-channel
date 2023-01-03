import Image from "next/image";
import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { CiPaperplane } from "react-icons/ci";

const Homepage = () => {
  return (
    <div> Sagar</div>
    // <div className="h-screen flex">
    //   <div className="w-[400px] h-full border border-[#EEEEEE] hidden  sm:inline-block ">
    //     <LeftSideBar />
    //   </div>
    //   <div className="h-full w-full relative overflow-y-scroll scroll-smooth ">
    //     <div className="h-[60px] border border-[#EEEEEE] px-[10px] flex  items-center justify-between sticky top-0 bg-[#fff]">
    //       <div className="flex items-center space-x-4">
    //         <Image
    //           width="100"
    //           height="100"
    //           className="w-10 h-10 rounded-full"
    //           src="https://images.unsplash.com/photo-1654345503171-211d64f7749b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //           alt=""
    //         />
    //         <div className="font-medium ">
    //           <p className="">Jese Leos</p>
    //           <div className="text-sm  text-[#27AE60] ">Online</div>
    //         </div>
    //       </div>
    //       <div className="flex text-[30px] gap-[20px]  ">
    //         <HiOutlineVideoCamera className="text-[#27AE60]" />
    //         <AiOutlineInfoCircle className="text-[#868383]" />
    //       </div>
    //     </div>

    //     <div className="flex flex-col gap-[100px] px-[20px] h-full "></div>

    //     <div className="px-[10px] py-[10px] flex items-center gap-[15px] border border-[#EEEEEE] h-[60px]  w-full  sticky bottom-0 bg-[#fff]  ">
    //       <label
    //         htmlFor="file"
    //         className="hover:bg-[#FAFAFA] duration-300 cursor-pointer rounded-full p-2"
    //       >
    //         <ImAttachment className="text-[20px]" />
    //       </label>
    //       <input type="file" className="hidden" id="file" />

    //       <div className="bg-[#FAFAFA] w-[90%]  h-full">
    //         <input
    //           type="text"
    //           placeholder="Type your message here.."
    //           className="h-full w-full outline-none px-[10px] bg-transparent rounded-[12px]"
    //         />
    //       </div>

    //       <button className="hover:bg-[#FAFAFA] duration-300 cursor-pointer rounded-full p-2">
    //         <CiPaperplane className="text-[30px]" />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Homepage;
