import Image from 'next/image';

const ServiceExplain = () => {
  return (
    <div className="px-[120px] mt-[150px] flex flex-col w-[80vw] mx-auto ">
      <div className="relative h-[350px] 2xl:h-[520px] ">
        <div className="w-[55%] 2xl:w-[55%] h-[300px] 2xl:h-[450px] absolute flex flex-col justify-center gap-5 bg-white/[14%] pr-[50px] 2xl:pl-[80px] pl-[50px]   right-0 top-[80px]">
          <h3 className="text-backgroundColor font-semibold text-[20px] 2xl:text-[30px]">
            ONLINE SESSION
          </h3>
          <p className="text-[18px] 2xl:text-[25px] text-white/60 first-letter:pl-10">
            We all have thoughts and behaviors that hold us back. With online
            sessions, you’ll learn to discover and overcome these hurdles with
            the support of a licensed counselor.
          </p>
        </div>
        <div className="absolute left-0 z-10 w-[50%] 2xl:h-[450px] h-[300px]  ">
          <Image
            className="object-cover"
            src={'/images/explain/session.jpg'}
            fill
            alt=""
          />
        </div>
      </div>

      <div className="relative h-[350px] 2xl:h-[520px] mt-[100px]">
        <div className="w-[55%] 2xl:w-[55%] h-[300px] 2xl:h-[450px] absolute flex flex-col justify-center gap-5 bg-white/[14%] px-[100px]   left-0 ">
          <h3 className="text-backgroundColor font-semibold text-[20px] 2xl:text-[30px] uppercase">
            Meditation
          </h3>
          <p className="text-[18px] 2xl:text-[25px] text-white/60 first-letter:pl-10">
            We provide relaxing music, videos and guided meditations to everyone
            who wants to fight oneself for peace. Maintain peace with yourself.
          </p>
        </div>
        <div className="absolute right-0 z-10 w-[50%] 2xl:h-[450px] h-[300px] top-[80px]  ">
          <Image
            className="object-cover"
            src={'/images/explain/meditation.png'}
            fill
            alt=""
          />
        </div>
      </div>

      <div className="relative h-[350px] 2xl:h-[520px] mt-[100px] ">
        <div className="w-[55%] 2xl:w-[55%] h-[300px] 2xl:h-[450px] absolute flex flex-col justify-center gap-5 bg-white/[14%] pr-[50px] 2xl:pl-[80px] pl-[50px]   right-0 top-[80px]">
          <h3 className="text-backgroundColor font-semibold text-[20px] 2xl:text-[30px] uppercase">
            journal writing
          </h3>
          <p className="text-[18px] 2xl:text-[25px] text-white/60 first-letter:pl-10">
            We all have thoughts and behaviors that hold us back. With online
            sessions, you’ll learn to discover and overcome these hurdles with
            the support of a licensed counselor.
          </p>
        </div>
        <div className="absolute left-0 z-10 w-[50%] 2xl:h-[450px] h-[300px]  ">
          <Image
            className="object-cover"
            src={'/images/explain/journal.png'}
            fill
            alt=""
          />
        </div>
      </div>

      <div className="relative h-[350px] 2xl:h-[520px] mt-[100px]">
        <div className="w-[55%] 2xl:w-[55%] h-[300px] 2xl:h-[450px] absolute flex flex-col justify-center gap-5 bg-white/[14%] px-[100px]   left-0 ">
          <h3 className="text-backgroundColor font-semibold text-[20px] 2xl:text-[30px]">
            Routine Activity
          </h3>
          <p className="text-[18px] 2xl:text-[25px] text-white/60 first-letter:pl-10">
            The secret of your future is hidden in your daily routine. You can
            add your routine for the following days and track your time.
          </p>
        </div>
        <div className="absolute right-0 z-10 w-[50%] 2xl:h-[450px] h-[300px] top-[80px]  ">
          <Image
            className="object-cover"
            src={'/images/explain/routine.png'}
            fill
            alt=""
          />
        </div>
      </div>

      <div className="relative h-[350px] 2xl:h-[520px] mt-[100px]">
        <div className="w-[55%] 2xl:w-[55%] h-[300px] 2xl:h-[450px] absolute flex flex-col justify-center gap-5 bg-white/[14%] pr-[50px] 2xl:pl-[80px] pl-[50px]   right-0 top-[80px]">
          <h3 className="text-backgroundColor font-semibold text-[20px] 2xl:text-[30px] uppercase">
            Community
          </h3>
          <p className="text-[18px] 2xl:text-[25px] text-white/60 first-letter:pl-10">
            We provide a global community section where you can share your
            thoughts and feelings to everyone.
          </p>
        </div>
        <div className="absolute left-0 z-10 w-[50%] 2xl:h-[450px] h-[300px]  ">
          <Image
            className="object-cover"
            src={'/images/explain/community.png'}
            fill
            alt=""
          />
        </div>
      </div>

      <div className="relative h-[350px] 2xl:h-[520px] mt-[100px]">
        <div className="w-[55%] 2xl:w-[55%] h-[300px] 2xl:h-[450px] absolute flex flex-col justify-center gap-5 bg-white/[14%] px-[100px]   left-0 ">
          <h3 className="text-backgroundColor font-semibold text-[20px] 2xl:text-[30px]">
            Message Support
          </h3>
          <p className="text-[18px] 2xl:text-[25px] text-white/60 first-letter:pl-10">
            You can personally message your therapist through our platform and
            share your feelings and problems with him/her.
          </p>
        </div>
        <div className="absolute right-0 z-10 w-[50%] 2xl:h-[450px] h-[300px] top-[80px]  ">
          <Image
            className="object-cover"
            src={'/images/explain/message.png'}
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceExplain;
