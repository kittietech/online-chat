import React from "react";
import classNames from "classnames";

import styles from "./Icon.module.scss";

export type IconVariantType =
  | "information"
  | "attachment"
  | "chat"
  | "mail"
  | "user"
  | "lock"
  | "search"
  | "bubble-speech"
  | "remove"
  | "power"
  | "plane"
  | "edit";

type Props = {
  variant: IconVariantType;
  className?: string;
};

const Icon: React.FC<Props> = ({ variant, className }) => {
  return (
    <i
      className={classNames(
        "text-2xl",
        styles.icon,
        styles[`icon-${variant}`],
        className
      )}
      aria-hidden={true}
    ></i>
  );
};

export default Icon;
