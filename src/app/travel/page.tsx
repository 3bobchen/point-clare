'use client'

import React from "react";
import WorldMap from "react-svg-worldmap";
import Image from "next/image";
import Passport from "../../../public/travel/24/PNG image-6E5DD4BB2B59-1.png";
import Capitol from "../../../public/travel/24/EDD87E64-911F-4F40-9419-11D177C7A2F8_1_105_c.jpeg";
import DeathV from "../../../public/travel/24/46753DFD-942D-45ED-9E26-D13F7F570E7B_1_105_c.jpeg";
import Berkeley from "../../../public/travel/24/7DB16DB4-53AB-496C-840B-26DFE379FE62_1_105_c.jpeg";
import JDZ from "../../../public/travel/24/2730FF35-33C0-45AB-87A4-EF6803F84D9E_1_105_c.jpeg";
import Golden from "../../../public/travel/24/8C7D7088-312D-4D17-82B8-AED1D308DA3B_1_105_c.jpeg";

export default function Page() {
  const data = [
    { country: "cn", value: 1 },
    { country: "au", value: 1 },
    { country: "us", value: 1 },
    { country: "ca", value: 1 },
    { country: "ad", value: 1 },
    { country: "at", value: 1 },
    { country: "fr", value: 1 },
    { country: "de", value: 1 },
    { country: "hu", value: 1 },
    { country: "it", value: 1 },
    { country: "li", value: 1 },
    { country: "mc", value: 1 },
    { country: "nl", value: 1 },
    { country: "nz", value: 1 },
    { country: "va", value: 1 },
    { country: "sg", value: 1 },
    { country: "sk", value: 1 },
    { country: "es", value: 1 },
    { country: "ch", value: 1 },
    { country: "th", value: 1 },
    { country: "gb", value: 1 },
    { country: "vn", value: 1 },
    { country: "cz", value: 1 },
  ];

  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a href="/work">work</a>
        <a href="/volunteering">volunteering</a>
        {/*<a href="/essays">essays</a>*/}
        <a><b>travel</b></a>
      </div>
      <h3 className="pr-6 md:pr-0 flex justify-end mt-5">{data.length} countries and counting</h3>
      <WorldMap
        color="black"
        value-suffix="people"
        size="responsive"
        data={data}
        backgroundColor="transparent"
      />
      <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">2024</h2>
      <div className="px-6 md:px-0 columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Death Valley"
            src={DeathV}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="US Capitol Dome"
            src={Capitol}
            fill
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Berkeley Law"
            src={Berkeley}
            fill
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Golden Gate Bridge"
            src={Golden}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Jingdezhen pottery"
            src={JDZ}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Summary of flights taken"
            src={Passport}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </main>
  )
}