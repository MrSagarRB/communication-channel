"use client";

import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";

import UserContainer from "./UserContainer";

let userData = [
  {
    profileUrl:
      "https://images.unsplash.com/photo-1641320485649-7063cd9f4a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Sagar Borude",
    status: false,
    lastMsg: "How are you doing?",
    onLineStatus: true,
    time: "16:20",
    seen: true,
    id: 1,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1652018145149-b61a9566b245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send Me Account Details? i will send you 100Rs",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 2,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send Me Account Details? i will send you 100Rs",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 3,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1654345503131-a1dd7f0e37ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "hello",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 4,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1654345503112-210af298c168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Can we Meet",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send your email",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1652018145149-b61a9566b245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send Me Account Details? i will send you 100Rs",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },

  {
    profileUrl:
      "https://images.unsplash.com/photo-1652018145149-b61a9566b245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "How are you",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1615068323438-d7e7ee3748e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send Me Account Details? i will send you 100Rs",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1652018145149-b61a9566b245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send Me Account Details? i will send you 100Rs",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },
  {
    profileUrl:
      "https://images.unsplash.com/photo-1654345503105-ac57e0ccc47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Sonu Shrivastav",
    status: false,
    lastMsg: "Send Me Account Details? i will send you 100Rs",
    onLineStatus: true,
    time: "18:50",
    seen: true,
    id: 1234567,
  },
];

interface UserThumbnailProps {
  ind: string;
}

const LeftSideBar = () => {
  let [activeChat, setActiveChat] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <div className="h-full ">
      <div className=" h-[160px] pt-[27px] px-[20px] ">
        <p className="text-[23px]">Messages</p>
        <div className="bg-[#EEEEEE] h-[36px] w-full rounded-[12px] flex overflow-hidden items-center mt-[18px]">
          <MagnifyingGlassIcon className="h-[20px] w-[20px] text-[#676767] mx-[10px]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full text-[14px] bg-[#EEEEEE] outline-none"
          />
        </div>
        <p className="text-[12px] mt-[11px]">
          Sort by <span className="text-[#2D9CDB] text-[14px]">Newest</span>
        </p>
      </div>
      <div className="h-[80%] overflow-y-scroll scroll-smooth">
        {userData.map((item, ind) => {
          return (
            <div onClick={() => setActiveChat(ind)} key={ind}>
              <UserContainer chatData={item} id={ind} activeChat={activeChat} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideBar;
