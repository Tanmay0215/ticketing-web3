import React, { useState } from 'react';
import ChatToggleButton from './ChatToggleButton';
import ChatBox from './ChatBox';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control chatbox visibility

  // Function to toggle chatbox visibility
  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Chat toggle button */}
      <div>
        <ChatBox isOpen={isOpen} />
      </div>

      <div className='self-end'>
        <ChatToggleButton isOpen={isOpen} toggleChatBox={toggleChatBox} />
      </div>

      {/* Chatbox */}
    </div>
  );
};

export default Chat;
