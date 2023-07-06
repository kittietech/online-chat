import classNames from "classnames";
import React from "react";

type Props = {
  message: string;
  datetime: string;
  isMessageFromMe?: boolean;
};

const ChatMessage: React.FC<Props> = ({
  message,
  datetime,
  isMessageFromMe,
}) => {
  return (
    <div
      className={classNames("flex", { "flex-row-reverse": isMessageFromMe })}
    >
      <div
        className={classNames("relative mb-4 py-4 pl-4 pr-12 text-sm", {
          "bg-slate-600 rounded-r-4xl rounded-tl-4xl": !isMessageFromMe,
          "bg-blue-500 rounded-l-4xl rounded-tr-4xl": isMessageFromMe,
        })}
      >
        {message}
        <time className="absolute right-3 bottom-3 text-xs text-gray-800">
          {datetime}
        </time>
      </div>
    </div>
  );
};

export default ChatMessage;
