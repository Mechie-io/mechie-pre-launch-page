import React, {useState, useEffect} from "react";
import { FunctionComponent } from 'react';

import logo from "../Image/Group 2.svg"
import companyName from "../Image/mechie.svg"
import Image from "next/image"


const Footer:FunctionComponent = () =>{
    return(
        <div className="w-full relative border-uishadcncom-athens-gray border-t-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-center pt-24 px-12 pb-6 gap-16 text-left text-sm text-uishadcncom-woodsmoke-60 font-roboto">
            <div className="w-full flex flex-row items-start justify-start gap-6 max-w-[1240px]">
                <div className="flex flex-col items-start justify-center gap-6">
                    <div className="h-9 flex flex-col items-start justify-center py-0 pl-0 pr-6 box-border min-w-[141.33px]">
                        <div className="w-[109.5px] relative h-6">
                            <Image className="absolute h-full w-[25.84%] top-[0%] right-[74.16%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full" alt="company logo" src={logo} />
                            <Image className="absolute h-[79.58%] w-[65.94%] top-[9.98%] right-[0.02%] bottom-[10.43%] left-[34.05%] max-w-full overflow-hidden max-h-full" alt="company name" src={companyName} />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-6">
                        <div className="flex flex-col items-start justify-start text-uishadcncom-pale-sky">
                            <div className="relative leading-[20px]">Privacy policy</div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[20px]">Cookies</div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[20px]">Help center</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-end gap-6 text-base text-uishadcncom-black-pearl">
                    <div className="w-[150px] flex flex-col items-center justify-start gap-2">
                        <div className="self-stretch relative leading-[24px] font-medium">Navigation</div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-1 text-sm text-uishadcncom-pale-sky">
                            <div className="self-stretch relative leading-[20px]">Explore</div>
                            <div className="flex flex-row items-center justify-center gap-1">
                                <div className="relative leading-[20px]">Courses</div>
                                <div className="rounded-[99px] bg-mediumslateblue flex flex-row items-center justify-center py-0 px-1.5 text-[12px] text-uishadcncom-electric-violet">
                                    <div className="relative leading-[16px]">New</div>
                                </div>
                            </div>
                            <div className="self-stretch relative leading-[20px]">Practice</div>
                            <div className="self-stretch relative leading-[20px]">Discuss</div>
                        </div>
                    </div>

                    <div className="w-[150px] flex flex-col items-center justify-start gap-2">
                        <div className="self-stretch relative leading-[24px] font-medium">Socials</div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-1 text-sm text-uishadcncom-pale-sky">
                            <div className="self-stretch relative leading-[20px]">Facebook</div>
                            <div className="self-stretch relative leading-[20px]">Twitter</div>
                            <div className="self-stretch relative leading-[20px]">Discord</div>
                            <div className="self-stretch relative leading-[20px]">Github</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative leading-[20px] text-uishadcncom-jumbo text-center">Copyright © 2024 Mechie | All Rights Reserved</div>
        </div>

    );
};


export default Footer