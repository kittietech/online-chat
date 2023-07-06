import React from "react";
import ChatMessage from "./ChatMessage";
import Icon from "../Icon/Icon";

type Props = {
  activeUser: string;
  messages: {
    id: string;
    text: string;
    datetime: string;
    userId: string;
  }[];
};

const ChatListMessage: React.FC<Props> = ({ activeUser, messages }) => {
  return (
    <>
      <div>
        {messages.map(({ id, text, datetime, userId }) => {
          const isMessageFromMe = userId === activeUser;

          return (
            <ChatMessage
              key={id}
              isMessageFromMe={isMessageFromMe}
              message={text}
              datetime={datetime}
            />
          );
        })}
      </div>
      <div className="relative flex flex-none">
        <button className="absolute top-0 left-3 w-12 h-12">
          <Icon className="text-blue-500" variant="attachment" />
        </button>
        <div
          className="pl-16 py-3 flex-1 bg-slate-600 rounded-3xl resize-none text-white placeholder:text-gray-500 "
          placeholder="Написати повідомлення"
          contentEditable={true}
        />
        <button className="">
          <Icon className="text-blue-500 text-5xl" variant="plane" />
        </button>
      </div>
    </>
  );
};

export default ChatListMessage;
