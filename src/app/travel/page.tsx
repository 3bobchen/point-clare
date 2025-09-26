"use client";

import React from "react";
import WorldMap from "react-svg-worldmap";
import Image from "next/image";
import Passport25 from "../../../public/travel/25/4A92A6D7-03AE-472F-9B85-85BC9F23B365.webp";
import Passport24 from "../../../public/travel/24/PNG image-6E5DD4BB2B59-1.webp";
import Passport23 from "../../../public/travel/23/PNG image-717E1F5654EB-1.webp";
import Passport22 from "../../../public/travel/22/PNG image-292DE0EB7A4B-1.webp";

import OxfordCircus from "../../../public/travel/22/D433211C-BDD0-4399-B38E-0A6B5030E224_1_105_c.webp";
import Hanoi from "../../../public/travel/22/2BFB9E00-85E3-4C27-820D-2D6BC5AB86FD_1_105_c.webp";
import CharingCross from "../../../public/travel/22/7B12918C-1CE1-4078-92C8-9D8D0A44A522_1_105_c.webp";
import Oxford from "../../../public/travel/22/DCF82232-DE6E-4959-AF5E-A64B8118FEDA_1_105_c.webp";
import AlbertHall from "../../../public/travel/22/C8C31235-7580-40D1-91AF-0269E042B1DA_1_201_a.webp";

import Singapore from "../../../public/travel/23/18FA3C1D-391C-4D76-923C-0253860DF654_1_105_c.webp";
import Shanghai from "../../../public/travel/23/400E7418-A9E9-4EC6-9805-703C67A60791_1_105_c.webp";
import Sagrada from "../../../public/travel/23/F2A53FD8-8DC1-4800-B70F-96D94FE8A260_1_105_c.webp";
import Zaanse from "../../../public/travel/23/FECB8F36-2CCE-4F0A-A3D5-FD5EDA64FB87_1_102_o.webp";
import Phuket from "../../../public/travel/23/6C30BD44-305F-4322-8E24-D0EF1A7F50E6_1_105_c.webp";

import Capitol from "../../../public/travel/24/EDD87E64-911F-4F40-9419-11D177C7A2F8_1_105_c.webp";
import DeathV from "../../../public/travel/24/46753DFD-942D-45ED-9E26-D13F7F570E7B_1_105_c.webp";
import Berkeley from "../../../public/travel/24/7DB16DB4-53AB-496C-840B-26DFE379FE62_1_105_c.webp";
import JDZ from "../../../public/travel/24/2730FF35-33C0-45AB-87A4-EF6803F84D9E_1_105_c.webp";
import Golden from "../../../public/travel/24/8C7D7088-312D-4D17-82B8-AED1D308DA3B_1_105_c.webp";

import Giza from "../../../public/travel/25/giza.webp";
import Istanbul from "../../../public/travel/25/istanbul.webp";
import Kuala from "../../../public/travel/25/kuala.webp";
import Saudi from "../../../public/travel/25/saudi.webp";
import Plane from "../../../public/travel/25/plane.webp";
import { Header } from "@/components/Header";

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
    { country: "ae", value: 1 },
    { country: "my", value: 1 },
    { country: "sa", value: 1 },
    { country: "eg", value: 1 },
    { country: "tr", value: 1 },
    { country: "kr", value: 1 },
  ];

  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <Header current="travel" />
      <h3 className="pr-6 md:pr-0 flex justify-end mt-5">
        {data.length} countries and counting
      </h3>
      <div className="flex justify-center">
        <WorldMap
          color="black"
          value-suffix="people"
          size="lg"
          data={data}
          backgroundColor="transparent"
        />
      </div>
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 mt-6">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">2025</h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-3 gap-4 my-8">
          <div className="relative h-40 mb-4">
            <Image
              alt="Pyramids of Giza"
              src={Giza}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80 mb-4 sm:mb-0">
            <Image
              alt="Plane"
              src={Plane}
              fill
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
          <div className="relative h-40 sm:h-80 sm:mb-4">
            <Image
              alt="Edge of the World"
              src={Saudi}
              fill
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative h-40 mb-4 sm:mb-0">
            <Image
              alt="Petronas Towers"
              src={Kuala}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40 mb-4">
            <Image
              alt="Istanbul"
              src={Istanbul}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              alt="Summary of flights taken"
              src={Passport25}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 mt-6">
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
              src={Passport24}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 mt-6">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">2023</h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-3 gap-4 my-8">
          <div className="relative h-40 mb-4">
            <Image
              alt="Zaanse Schans"
              src={Zaanse}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80 mb-4 sm:mb-0">
            <Image
              alt="Sagrada Famillia"
              src={Sagrada}
              fill
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
          <div className="relative h-40 sm:h-80 sm:mb-4">
            <Image
              alt="Shanghai Bund"
              src={Shanghai}
              fill
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative h-40 mb-4 sm:mb-0">
            <Image
              alt="Phuket Resort"
              src={Phuket}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40 mb-4">
            <Image
              alt="Singapore"
              src={Singapore}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              alt="Summary of flights taken"
              src={Passport23}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 mt-6">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">2022</h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-3 gap-4 my-8">
          <div className="relative h-40 mb-4">
            <Image
              alt="Oxford Circus Roundel"
              src={OxfordCircus}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80 mb-4 sm:mb-0">
            <Image
              alt="Hanoi train street"
              src={Hanoi}
              fill
              priority
              className="rounded-lg object-cover object-[-16px] sm:object-center"
            />
          </div>
          <div className="relative h-40 sm:h-80 sm:mb-4">
            <Image
              alt="Oxford"
              src={Oxford}
              fill
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative h-40 mb-4 sm:mb-0">
            <Image
              alt="Albert Hall"
              src={AlbertHall}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40 mb-4">
            <Image
              alt="Charing Cross"
              src={CharingCross}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-80">
            <Image
              alt="Summary of flights taken"
              src={Passport22}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
