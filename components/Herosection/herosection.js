/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
const Herosection = () => {
  return (
    <div className="grid grid-cols-2 h-[90vh]">
      <div className="flex flex-col gap-4 2xl:pt-[200px] pt-[150px] pl-[100px] pr-[30px]">
        <h1 className="2xl:text-[80px]  2xl:leading-[80px] 2xl:font-[700] font-[600] text-[50px] leading-[53px] uppercase  font-montserrat ">
          Take Control of Your Thoughts and Emotions
        </h1>
        <h2 className=" 2xl:text-[24px] text-[16px] opacity-80 font-montserrat">
          Don't let distance or a busy schedule prevent you from getting the
          help you need. Start your journey towards a more positive and
          fulfilling life today.
        </h2>
        <div className="flex gap-5 items-center pt-6 2xl:text-[24px]">
          <div className="bg-backgroundColor py-2 px-3 xl:px-5 text-black font-[650]  rounded-lg">
            Get Started
          </div>
          <div className="text-white font-sembold font-[650]  ">
            Book a Service
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="absolute 2xl:w-[700px] 2xl:h-[700px] w-[550px] h-[550px]  mt-8"
          style={{ top: '50%', transform: 'translate(0,-50%)' }}
        >
          <Image
            src="/images/herosection.png"
            className="object-contain"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
