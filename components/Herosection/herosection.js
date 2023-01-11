import React from 'react';
import Image from 'next/image';
const Herosection = () => {
  return (
    <div className="grid grid-cols-2 h-[90vh]">
      <div className="flex flex-col gap-4 pt-[100px] pl-[100px] pr-[30px]">
        <h1 className="font-[600] text-[50px] leading-[53px] uppercase  font-montserrat ">
          Take Control of Your Thoughts and Emotions
        </h1>
        <h2 className=" text-[16px] opacity-80 font-montserrat">
          Don't let distance or a busy schedule prevent you from getting the
          help you need. Start your journey towards a more positive and
          fulfilling life today.
        </h2>
        <div className="flex gap-5 items-center pt-6">
          <div className="bg-backgroundColor py-2 px-3 text-black font-[650] rounded-lg">
            Get Started
          </div>
          <div className="text-white font-sembold font-[650]  ">
            Book a Service
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/herosection.png"
          className="object-contain"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Herosection;
