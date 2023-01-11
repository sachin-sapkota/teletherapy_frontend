import Image from 'next/image';

const Trust = () => {
  return (
    <div className="grid grid-cols-2 place-content-stretch px-[120px] mt-[50px] ">
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
            Why trust us?
          </div>
        </h2>
        <h1 className="text-[20px] md:text-[35px] font-semibold font-poppins ">
          Professional licensed therapist
        </h1>
        <h3 className="  text-[20px] opacity-80 pr-[50px] font-[300] tracking-tight">
          Trust is the foundation of any therapeutic relationship. Trust
          building is a first step in any counselling interaction. We have the
          professional, licensed and vetted therapist to whom you can trust.
        </h3>
      </div>
      <div className="flex justify-end">
        <Image
          className="object-contain"
          src="/images/therapist.png"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
};

export default Trust;
