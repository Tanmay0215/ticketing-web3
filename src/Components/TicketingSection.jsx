import React from "react" ;
import {Img,Text} from "../Components"
import image1 from '../assets/Taylor.jpg'
export default function TicketingSection(){
return(
<div className="mb-1 flex px-14 md:px-5 sm:px-4">
  <div className="mx-auto flex w-full max-w-[1280px] items-center gap-5 md:flex-col">
    <div className="flex w-[44%] flex-col items-start md:w-full">
      <Text 
        size="textlg" 
        as="p" 
        className="text-[64px] font-normal tracking-[0.64px] text-[#ffffff] lg:text-[48px] md:text-[48px]"
      >
        TICKETING
      </Text>
      <Text 
        size="textlg" 
        as="p" 
        className="font-['Happy_Monkey'] text-[48px] font-normal leading-[76px] tracking-[0.64px] text-[#ffffff] lg:text-[48px] md:text-[48px]"
      >
        FUN is a language in itself
      </Text>
      <div className="flex flex-col gap-[22px] self-stretch">
        <Text 
          size="textlg" 
          as="p" 
          className="font-['Poppins'] text-[24px] font-normal leading-8 text-[#ffffff] lg:w-full lg:text-[20px] md:w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
        </Text>
        <Text 
          size="textmd" 
          as="p" 
          className="text-[#ffffff] 5px 1px text-shadow-[2px rounded-[2px] bg-[#111d1d] px-8 py-2 font-['Roboto'] text-[36px] font-medium tracking-[0.36px] text-[#ffffff] lg:text-[30px] md:text-[30px] sm:px-4 sm:text-[28px]"
        >
          Browse Events
        </Text>
      </div>
    </div>
    <div className="relative h-[799px] flex-1 md:w-full md:flex-none md:self-stretch">
      <img 
        src={image1}
        alt="Silhouette Image" 
        className="absolute bottom-0 left-0 object-[88%] object-contain" 
      />
      <img 
        src={image1} 
        alt="Duplicate Silhouette Image" 
        className="absolute right-[17px] top-0 object-[62%] object-contain" 
      />
    </div>
  </div>
</div>
);
}