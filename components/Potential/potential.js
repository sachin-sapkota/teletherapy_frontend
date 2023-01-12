import Image from 'next/image';

const Potential = () => {
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
            Why are you different
          </div>
        </h2>
        <h1 className="text-[20px] md:text-[35px] font-semibold font-poppins ">
          Know your potential
        </h1>
        <h3 className="tracking-wide  text-[20px] opacity-80 pr-[50px]">
          We provide outstanding services with our team of proficient and
          experience psychiatrists and nutritionists.
        </h3>
      </div>
      <div className="flex justify-end">
        <Image
          className="object-contain"
          src="/images/potential.png"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
};

export default Potential;
