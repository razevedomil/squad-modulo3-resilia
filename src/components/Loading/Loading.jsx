import React, { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Loading...</h2>
      <div
        style={{
          width: `${progress}%`,
          height: "20px",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
};

export default Loading;