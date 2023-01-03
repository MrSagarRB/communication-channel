"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

const UserContainer = ({ props, id, activeChat }) => {
  return (
    <div
      className={`px-[20px] ${
        activeChat === id && "bg-[#EEEEEE]"
      } flex items-center justify-between text-[14px] py-[10px] cursor-pointer duration-300`}
    >
      <div className="flex gap-[10px] items-center">
        <div className="relative  h-10 w-10">
          <Image
            width="100"
            height="100"
            className="w-10 h-10 rounded-full object-cover"
            src={props?.profileUrl}
            alt=""
          />
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div>
          <p>{props?.name}</p>
          <p className="overflow-hidden w-[170px] text-[#9c9a9a] truncate ...">
            {props?.lastMsg}
          </p>
        </div>
      </div>
      <div className="flex flex-col  items-end">
        <p className="">{props?.time}</p>
        <RiCheckDoubleLine className=" " />
      </div>
    </div>
  );
};

export default UserContainer;