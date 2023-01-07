import { type } from "os";

// export type acitveChat=boolean


export type UserProps={
    chatData: {
      profileUrl: string;
      name: string;
      status: boolean;
      lastMsg: string;
      onLineStatus: boolean;
      time: string;
      seen: boolean;
      id: number;
    };
    activeChat: number;
    id: number;
  }