// src/components/Counter.tsx
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const backgroundColor = useSpring({
    backgroundColor: `rgb(${count}, ${100 + count * 2}, ${255 - count * 3})`, // Changing color based on count
  });

  return (
    <animated.div style={{ ...backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
        <div>Count: {count}</div>
      </div>
    </animated.div>
  );
};

export default Counter;
