// import { useEffect } from "react";

import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <p className="text-center my-6 tracking-wider text-lg">
        This is the current time :{time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
      </p>
    </>
  );
}

export default CurrentTime;
