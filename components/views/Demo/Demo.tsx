import React, { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const Demo: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<number[]>([]);

  useEffect(() => {
    console.log("count", count);

    return () => {
      // UnMount
    };
  }, [count]);

  useEffect(() => {
    setCount(12);
  }, []);

  useEffect(() => {
    setLog((prevState) => [...prevState, count]);
  }, [count]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prevState) => prevState + 1);
  };

  // console.log("count", count);

  return (
    <div>
      {children}
      <button onClick={handleClick}>Update count</button>
      <p>Current count: {count}</p>

      {log.map((currentLog, index) => {
        return (
          <p key={index}>
            <>
              Index {index + 1} - {currentLog}
            </>
          </p>
        );
      })}
    </div>
  );
};

export default Demo;
