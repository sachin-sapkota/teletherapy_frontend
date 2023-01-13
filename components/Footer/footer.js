import Image from 'next/image';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-background pt-32">
      <div className=" relative bg-black ">
        <div className="absolute  left-0 bottom-0 ">
          {/* <Image
            className="object-contain   "
            src={
              'https://res.cloudinary.com/dpgmzfcwh/image/upload/v1666332213/spring_x6kysd.png'
            }
            width={150}
            height={150}
            alt=""
          /> */}
        </div>

        {/* footer middle part */}
        <div className=" bg-black py-16  md:px-20  px-3 ">
          <div className="border-t-2  px-5 border-[#464141] py-1 pt-[50px]">
            <div className="   flex py-3  px-5 gap-10 ">
              <div className=" flex pb-5 w-[400px]">
                <div className="flex flex-col text-white gap-1">
                  <div className=" font-bold text-[30px]">TeleCBT</div>
                  <p className="font-semibold text-white/60  pr-[80px]">
                    Welcome to our online teletherapy platform for cognitive
                    behavior change.
                  </p>
                  <h1 className="text-white font-bold text-lg pt-3  ">
                    Contact Us
                  </h1>
                  <div className="flex space-x-4 py-1 items-center ">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Digitize-Nepal-106997865535623/?ref=pages_you_manage"
                      rel="noopener noreferrer"
                    >
                      <BsFacebook className="h-6 w-6 cursor-pointer text-red-300" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/digitize-nepal-1b2688253/"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin className="h-6 w-6 cursor-pointer text-red-300" />
                    </a>
                    <a
                      target="_blank"
                      href="https://twitter.com/DigitizeNepal"
                      rel="noopener noreferrer"
                    >
                      <BsTwitter className="h-6 w-6 cursor-pointer text-red-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid sm:grid-cols-4 gap-5 grid-cols-2 place-items-start">
                <div>
                  <h1 className="text-[#EBCFCF] font-bold text-lg mb-2">
                    Company
                  </h1>
                  <ul className="space-y-2 px-2">
                    <li className=" text-white/80 font-semibold">
                      <Link href={'/careers'}>Careers</Link>
                    </li>
                    <li className=" text-white/80 font-semibold">
                      <Link href={'/blogs'}>Blogs</Link>
                    </li>
                    <li className=" text-white/80 font-semibold">
                      <Link href={'/about'}>About Us</Link>
                    </li>
                    <li className=" text-white/80 font-semibold">
                      <Link href={'/pricing'}>Pricing </Link>
                    </li>
                    <li className=" text-white/80 font-semibold">
                      <Link href={'/faq'}>FAQ's </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-[#EBCFCF] font-bold text-lg mb-2">
                    Workflow
                  </h1>
                  <ul className="space-y-2">
                    <li className=" text-white/80 font-semibold">StartUp</li>
                    <li className=" text-white/80 font-semibold">Scaling</li>
                    <li className=" text-white/80 font-semibold">
                      Transformation
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[#EBCFCF] font-bold text-lg mb-2">
                    Technology
                  </h1>
                  <ul className="space-y-2">
                    <li className=" text-white/80 font-semibold">React JS</li>
                    <li className=" text-white/80 font-semibold">Node JS</li>
                    <li className=" text-white/80 font-semibold">Wordpress</li>
                    <li className=" text-white/80 font-semibold">Next JS</li>
                    <li className=" text-white/80 font-semibold">SEO</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[#EBCFCF] font-bold text-lg mb-2">
                    Developers
                  </h1>
                  <ul className="space-y-2">
                    <li className=" text-white/80 font-semibold">Projects</li>
                    <li className=" text-white/80 font-semibold">Forum</li>
                  </ul>
                  <h1 className="text-[#EBCFCF] font-bold text-lg mb-2 mt-4">
                    Legal
                  </h1>
                  <ul className="space-y-2">
                    <Link href="/privacypolicy">
                      <li className=" text-white/80 font-semibold cursor-pointer">
                        Privacy Policy
                      </li>
                    </Link>
                    <Link href="/termsandconditions">
                      <li className=" text-white/80 font-semibold cursor-pointer">
                        Terms and Conditions
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom part */}
        <div className=" py-5 px-[100px] ">
          <div className="border-t-2 flex justify-center px-10 border-[#464141] py-3 text-sm">
            <div className="flex items-center justify-center">
              <p className="text-white/80 mr-1">Copyright </p>
              <AiOutlineCopyrightCircle className="text-white/80" />
              <p className="text-white/80 mx-1 font-sans">2023</p>
              <p className="text-white/80 ">
                <span>by</span>
                <span className="ml-1 text-sm">TeleCBT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
