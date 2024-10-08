// src/components/HelloMessage.js

import React from 'react';
import { animated } from '@react-spring/web';
import { useSpring } from '@react-spring/web';



const Message = ({ name, props }) => {
  const pop = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });
  const naam = localStorage.getItem('name');
  return (
    <animated.h1 style={pop} className="text-4xl font-bold text-gray-800">
      Hello {naam}!
    </animated.h1>
  );
}

export default Message;
