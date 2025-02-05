import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Box, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // Animated background
  const backgroundSpring = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${count / 10})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={{ ...backgroundSpring, padding: "20px", minHeight: "100vh" }}>
      <Box textAlign="center">
        <Typography variant="h4">Counter: {count}</Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="contained" onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button variant="contained" onClick={() => setCount(0)}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
