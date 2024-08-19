import React, {useState, useEffect} from "react";
import { FunctionComponent } from 'react';

import logo from "../Image/Group 2.svg"
import companyName from "../Image/mechie.svg"
import Image from "next/image"
const Header:FunctionComponent = () => {
    return (
        <nav className="w-full relative border-[#f9fafb] border-b-1 border-solid box-border h-20 overflow-hidden shrink-0 py-2 px-12  flex flex-row items-center justify-canter text-left text-sm text-[#09090b] font-roboto">
            <div className="flex-1 flex flex-row items-start justify-between max-w-[1344px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-5">
                    <div className="self-stretch flex flex-col items-start justify-center py-0 pl-0 pr-6 box-border min-w-[141.33px]">
                        <div className="w-[109.5px] relative h-6">
                            <Image src={logo} alt ="logo" className="absolute h-full w-[25.84%] top-[0%] right-[74.16%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"/>
                            <Image src={companyName} alt="company name" className="absolute h-[79.58%] w-[65.94%] top-[9.98%] right-[0.02%] bottom-[10.43%] left-[34.05%] max-w-full overflow-hidden max-h-full"/>

                        </div>

                    </div>
                    
                </div>

                <div className="flex flex-row items-center justify-start gap-5">
                    
                    {/* <div className="h-11 px-5 py-2 bg-[#6f41d2] hover:bg-[#a576ff]  rounded-xl shadow-inner border border-[#a576ff] flex items-center justify-center">
                        <div className="relative leading-[20px] font-medium text-white text-sm font-['Inter'] text-center">
                            Join Waitlist
                        </div>
                        
                        </div> */}

                </div>

            </div>

        </nav>
    );
};
        
        
    

export default Header