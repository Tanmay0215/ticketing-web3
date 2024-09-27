import React, { useState } from 'react';

const ChatBox = ({ isOpen }) => {
  const [inputValue, setInputValue] = useState(''); // To store the value of the text input

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the search action
  const handleSearch = () => {
    alert(`Searching for: ${inputValue}`);
    // Implement your actual search logic here
  };

  return (
    <div
      className={`${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } transition-all duration-300 ease-in-out transform mt-4 w-80 border bg-white flex border-gray-300 rounded-lg shadow-lg p-4 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default ChatBox;
