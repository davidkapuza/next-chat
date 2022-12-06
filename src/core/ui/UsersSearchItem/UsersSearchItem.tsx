"use client"
import "./UsersSearchItem.styles.css";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

function SearchItem({ user }: any) {

  const router = useRouter();
  // TODO create chat roles to be able to have more then two members
  const enterChat = async (user: any) => {
    await fetch("/api/chats/enterChat", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatOwner: user  }),
    })
    router.push("chat/" + user.chat_id)
  }

  return (
    <li >
      <button className="Search-item" onClick={() => enterChat(user)}>
        <Image
          className="mr-2 Avatar"
          width={40}
          height={40}
          src={user.image}
          alt="Avatar"
        ></Image>
        <div className="flex-1">
          <h1 className="text-sm leading-3">{user.name}</h1>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>
      </button>
    </li>
  );
}

export default SearchItem;
