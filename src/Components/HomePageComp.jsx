import React from 'react';
import Taylor from '../assets/Taylor.jpg'

const HomePageComp = () => {
  return (<div className=" flex items-center min-h-screen w-screen">

      <div className="text-white flex w-10/12 justify-between px-16">
        <div className="flex gap-y-8 flex-col mt-40">
          <div className="text-6xl font-jaini">TICKETING</div>
          <div className="text-6xl font-happyMonkey">FUN is a language in itself</div>
          <p className="text-lg font-poppins max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel
            aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
          </p>
          <div className="w-[320px] h-[69px] bg-gray-800 text-white text-2xl font-roboto rounded-tl-2xl shadow-lg flex justify-center items-center">
            Browse Events
          </div>
        </div>

        
        <div className="flex space-x-4 justify-center w-6/12 mt-[160px]">
          <div className="min-w-[400px] relative  h-auto">
            <img className="w-full" src={Taylor} alt="meme" />
          </div>
          <div className="min-w-[400px] absolute right-[80px] top-[94px] h-auto">
            <img className="w-full" src={Taylor} alt="meme" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComp;
