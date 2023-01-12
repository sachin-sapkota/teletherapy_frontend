import Image from 'next/image';

const Process = () => {
  return (
    <div className="  mx-[120px] mt-[50px] relative h-[1000px] ">
      <div className=" flex flex-col ">
        <h2 className="flex gap-3  ">
          <Image
            className="object-contain"
            src="/images/line.svg"
            width={60}
            height={40}
            alt={''}
          />
          <div className="uppercase tracking-wide text-[18px]">
            How it works?
          </div>
        </h2>
        <h1 className="text-[20px] md:text-[35px] font-semibold font-poppins ">
          How do I get started?
        </h1>
        <h3 className=" text-[20px] opacity-80 pr-[50px] font-[300] tracking-tight">
          Get to know how everything works here.
        </h3>
      </div>
      <div className="absolute flex justify-end right-0 top-[100px] ">
        <Image
          className="object-contain "
          src="/images/process.png"
          width={800}
          height={800}
          alt=""
        />
      </div>
    </div>
  );
};

export default Process;
