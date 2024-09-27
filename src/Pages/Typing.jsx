import ReactTypingEffect from 'react-typing-effect';

const Typing = () => {
  return (
    <div>
      <ReactTypingEffect text={["Hello, welcome to React!", "Enjoy coding!"]} speed={100} eraseSpeed={50} />
    </div>
  );
};

export default Typing;
