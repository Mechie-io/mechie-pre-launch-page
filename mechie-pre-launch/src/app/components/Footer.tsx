import React, {useState, useEffect} from "react";
import { FunctionComponent } from 'react';

import logo from "../Image/Group 2.svg"
import companyName from "../Image/mechie.svg"
import Image from "next/image"


const Footer:FunctionComponent = () =>{
    return(
        <div className="w-full relative border-uishadcncom-athens-gray border-t-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-center pt-24 px-12 pb-6 gap-16 text-left text-sm text-uishadcncom-woodsmoke-60 font-roboto">

            <div className="w-[120.5px] h-6 mb-0 pb-0 flex items-center">
            <div className="relative h-full w-full flex items-center justify-between">
                <Image
                className="h-full w-auto"
                alt="company logo"
                src={logo}
                />
                <Image
                className="h-[80%] w-auto"
                alt="company name"
                src={companyName}
                />
            </div>
            </div>


            <div className="mb-100 pt-0 w-[309px] text-center text-[#13072e] text-base font-normal font-['Inter'] ">Sign up to get access to the platform on a priority basis as soon as we launch!</div>

            
            </div>

    );
};


export default Footer