import classNames from "classnames";
import React from "react";

type Props = {
  imageUrl: string;
  isOnline?: boolean;
  className?: string;
};

const Avatar: React.FC<Props> = ({ imageUrl, isOnline, className }) => {
  return (
    <figure className={classNames("relative", className)}>
      <img
        className="w-20 h-20 rounded-full overflow-hidden object-cover"
        src={imageUrl}
        alt="no avatar"
      />
      {isOnline && (
        <i className="absolute left-0 bottom-0 w-4 h-4 rounded-full bg-green-500 border-2 border-slate-800"></i>
      )}
    </figure>
  );
};

export default Avatar;
