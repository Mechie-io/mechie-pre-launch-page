import Image from "next/image";
import { LaunchSoon } from "./components/launch-soon";
import logo from "./Image/vector-logo.png"

export default function Home() {
  return (
    <div >
      
      <div className="ml-8 my-2 ">
        <div className="flex "> 
          <div className="">  
            <LaunchSoon ></LaunchSoon>
            {/* <h1 className=" ml-12 w-[990px] text-[80px] font-medium font-['Inter'] leading-[89.6px]">Accelerate Your Mechanical Engineering 
              <span className="text-[80px] font-medium font-['Inter'] leading-[89.6px] gradient-text"> Career to the Next Level</span>
            </h1> */}
            <div className="my-5  h-[161px] text-[#13072e] text-[32px] font-medium font-['Inter'] leading-[34px]">Accelerate Your Mechanical Engineering  
            <span className="font-medium font-['Inter'] gradient-text"> Career to the Next Level</span>
            </div>
 
          </div>


          <div className="mt-[40px] w-full max-w-[90%]">
            <Image
                src={logo}// Replace with your image path
                alt="logo"
                width={800} // Replace with your image width
                height={800} // Replace with your image height
                className=""
              />
          </div>
        </div>
        <p className="mr-12 text-lg font-normal font-['Inter'] leading-relaxed">Join our waitlist to access the platform on a priority basis as soon as we launch!</p>
    </div> 
      
    </div>
  );
}
