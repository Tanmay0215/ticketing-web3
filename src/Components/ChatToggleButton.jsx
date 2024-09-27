import React from 'react';

const ChatToggleButton = ({ isOpen, toggleChatBox }) => {
  return (
    <button
      onClick={toggleChatBox}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition-all duration-300"
    >
      {isOpen ? 'Close Chat' : 'Open Chat'}
    </button>
  );
};

export default ChatToggleButton;
