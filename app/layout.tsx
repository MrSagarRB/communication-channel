"use client";

import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { ImAttachment } from "react-icons/im";
import "../styles/globals.css";
import LeftSideBar from "./components/LeftSideBar";
import { userID } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let [users, setUser] = useState<any[]>();
  let [selectedUser, setSelectedUser] = useState<string | undefined>();
  let hanedlSendMsg = () => {
    console.log(userID);
  };

  let getAllUsers = async () => {
    await axios
      .get("http://localhost:3000/api/communication/user/user")
      .then((result) => {
        setUser(result.data);
      });
  };

  let handelNewChat = () => {
    axios.post("http://localhost:3000/api/communication/chat/accessChat", {});

    console.log(selectedUser);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(selectedUser);

  return (
    <html>
      <head />
      <body>
        <div className="h-screen flex">
          <div className="w-[400px] h-full border border-[#EEEEEE] hidden  sm:inline-block ">
            <LeftSideBar />
          </div>
          <div className="h-full w-full   ">
            <div className="h-[60px] border border-[#EEEEEE] px-[10px] flex  items-center justify-between ">
              <div className="flex items-center space-x-4">
                <Image
                  width="100"
                  height="100"
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1654345503171-211d64f7749b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
                <div className="font-medium ">
                  <p className="">Jese Leos</p>
                  <div className="text-sm  text-[#27AE60] ">Online</div>
                </div>
              </div>
              <div className="flex text-[30px] gap-[20px]  ">
                <HiOutlineVideoCamera className="text-[#27AE60]" />
                <AiOutlineInfoCircle className="text-[#868383]" />
              </div>
            </div>

            <div className="flex flex-col gap-[15px] px-[20px] py-[20px] h-[85%] overflow-y-scroll   ">
              {/* msg2 */}
              <div className="flex gap-[10px]">
                <Image
                  width="100"
                  height="100"
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1654345503171-211d64f7749b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />

                <div className="bg-[#F4F4F7] py-[10px] px-[20px] rounded-b-[16px] rounded-tr-[16px] max-w-[70%]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="text-[#868383]">15:42</p>
                </div>
              </div>
            </div>

            <div className="px-[10px] py-[10px] flex items-center gap-[15px] border border-[#EEEEEE] h-[60px]  w-full   bg-[#fff]  ">
              <label
                htmlFor="file"
                className="hover:bg-[#FAFAFA] duration-300 cursor-pointer rounded-full p-2"
              >
                <ImAttachment className="text-[20px]" />
              </label>
              <input type="file" className="hidden" id="file" />

              <div className="bg-[#FAFAFA] w-[90%]  h-full">
                <input
                  type="text"
                  placeholder="Type your message here.."
                  className="h-full w-full outline-none px-[10px] bg-transparent rounded-[12px]"
                />
              </div>

              <button
                onClick={() => hanedlSendMsg()}
                className="hover:bg-[#FAFAFA] duration-300 cursor-pointer rounded-full p-2"
              >
                <CiPaperplane className="text-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
