import Image from 'next/image';

const ServiceExplain = () => {
  return (
    <div className="px-[120px] mt-[50px] flex flex-col h-[100vh] ">
      <div className="relative">
        <div className="w-[55%] absolute flex flex-col gap-5 bg-white/[14%] pl-[80px] pt-[50px] pr-[40px] pb-[50px] right-0 top-[80px]">
          <h3 className="text-backgroundColor font-semibold text-[20px]">
            ONLINE SESSION
          </h3>
          <p className="text-[18px] text-white/80 first-letter:pl-10">
            We all have thoughts and behaviors that hold us back. With online
            sessions, you’ll learn to discover and overcome these hurdles with
            the support of a licensed counselor.
          </p>
        </div>
        <div className="absolute left-0 z-10">
          <Image
            src={'/images/explain/session.png'}
            width={550}
            height={550}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceExplain;
