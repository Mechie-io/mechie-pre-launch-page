
import Image from "next/image";
import { LaunchSoon } from "./components/launch-soon";
import logoLarge from "./Image/vector-logo.png"
import logoSmall from "./Image/logo-small.png"
import Email from "./components/Email";
import TestimonialCarousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="">
      
      <div className="md:ml-20 ml-4 sm:ml-4 my-2 ">
        <div className="flex "> 
        
        <div className="w-full "> 
          <div className="md:mt-5"><LaunchSoon /></div>
          
          <div className="my-5 md:my-10 h-auto text-[#13072e] text-[50px] sm:text-[60px] sm:leading-[64px] md:text-[85px] md:leading-[89px] font-medium font-['Inter'] leading-[54px]">
            Accelerate Your Mechanical Engineering  
            <span className="font-medium font-['Inter'] gradient-text"> Career to the Next Level</span>
          </div>
          <div className=" md:w-[460px] mr-12 sm:text-[20px] text-[15px] font-normal font-['Inter'] leading-relaxed my-5 md:my-10"> 
          Join our waitlist to access the platform on a priority basis as soon as we launch!
          </div>
          {/* <Email></Email> */}
        </div>
        


        


          <div className="flex sm:mt-[20px] w-full md:max-w-[28%] sm:max-w-[15%] max-w-[30%]">

            <div className=" hidden md:block">
                <Image
                    src={logoLarge}// Image for medium and larger screen
                    alt="logo"
                    width={500} 
                    height={500} 
                    className="justify-end"
                  />
              </div>
              <div className="block md:hidden">
                <Image
                    src={logoSmall}// Replace with your image path
                    alt="logo"
                    objectFit="contain"
                    className="justify-end"
                  />
              </div>

          </div>
          


        </div> 
        <div className="flex justify-center lg:justify-start sm:flex  mb-12 ">
          <Email ></Email>
        </div>
        {/* <TestimonialCarousel></TestimonialCarousel> */}
    </div> 
        <div className="container mx-auto px-4">
            <TestimonialCarousel />
        </div>
      
    </div>
  );
}