import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Define background color transition
  const props = useSpring({
    backgroundColor: `rgb(${count * 10}, ${255 - count * 10}, 150)`, // Adjust colors dynamically
    config: { tension: 200, friction: 20 }, // Smooth transition settings
  });

  return (
    <animated.div style={{ ...props, padding: "20px", borderRadius: "10px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      
    </animated.div>
  );
};

export default Counter;
