import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="flex flex-col  px-[120px] mt-[50px] ">
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
            Know about our services
          </div>
        </h2>
        <h1 className="text-[20px] md:text-[35px] font-semibold font-poppins ">
          Our Solutions
        </h1>
        <h3 className="text-[20px] opacity-80 pr-[50px] font-[300] tracking-tight w-[50%]">
          We provide outstanding service with our team of proficient and
          experience team.
        </h3>
      </div>
      <div className="flex flex-wrap gap-[80px] pt-[50px]">
        {servicesData.map((item, i) => {
          return (
            <Link href={item.url} key={i}>
              <div className="rounded-[20px] bg-white/[14%] px-8 py-[100px] w-[200px] h-[200px] flex flex-col gap-5 items-center justify-around ">
                <Image src={item.image} width={100} height={100} alt="" />

                <h3 className="font-[300] text-backgroundColor text-sm">
                  {item.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
const servicesData = [
  {
    name: 'Online Sessions',
    image: '/images/session.svg',
    url: '#',
  },
  {
    name: 'Meditation',
    image: '/images/meditation.svg',
    url: '#',
  },
  {
    name: 'Journal Writing',
    image: '/images/journal.svg',
    url: '#',
  },
  {
    name: 'Routine Activity',
    image: '/images/routine.svg',
    url: '#',
  },
  {
    name: 'Community',
    image: '/images/community.svg',
    url: '#',
  },
  {
    name: 'Message Support',
    image: '/images/message.svg',
    url: '#',
  },
];
