import React from "react";
import Image from "next/image";

import Jade from "../../../public/achievements/Screenshot 2025-09-20 at 14.26.44.png";
import Openlaw from "../../../public/achievements/open-law-banner.svg";

import A1 from "../../../public/achievements/489698761_1488408432403570_345089709994515814_n.jpg";
import A2 from "../../../public/achievements/IMG_5730.jpeg";
import A3 from "../../../public/achievements/489567295_1488408299070250_2526129421879026284_n.jpg";

import B1 from "../../../public/achievements/IMG_5859.jpeg";
import B2 from "../../../public/achievements/IMG_5910.jpeg";
import B3 from "../../../public/achievements/IMG_6029.jpeg";

import C1 from "../../../public/achievements/berkeleyclass.jpeg";
import C2 from "../../../public/achievements/berkeleygate.jpeg";
import C3 from "../../../public/achievements/9circuit.jpeg";

import T1 from "../../../public/achievements/1731059753800.jpeg";
import T2 from "../../../public/achievements/1731059784532.jpeg";
import T3 from "../../../public/achievements/1731059768735.jpeg";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <Header current="highlights" />

      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 py-3">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">
          US Legal Systems Overseas Elective
        </h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-2 my-7">
          <div className="relative h-44 mb-8">
            <Image
              alt=""
              src={C3}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-44">
            <Image
              alt=""
              src={C1}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-96">
            <Image
              alt=""
              src={C2}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex md:px-0 columns-2 sm:columns-2 justify-center gap-8 sm:gap-32">
          <Image
            alt=""
            height={60}
            width={100}
            src="https://universitiesaustralia.edu.au/wp-content/uploads/2019/05/UNSW-1-300x300.png"
            priority
            className="rounded-lg object-cover"
          />
          <Image
            alt=""
            src="https://jobs.diglib.org/wp-content/uploads/wpjobboard/job/2996/company-logo/UC-Berkeley-Symbol.png"
            height={50}
            width={190}
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 py-3">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">
          Techspire
        </h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-2 my-7">
          <div className="relative h-44 mb-8">
            <Image
              alt=""
              src={T3}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-44">
            <Image
              alt=""
              src={T2}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-96">
            <Image
              alt=""
              src={T1}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex md:px-0 columns-2 sm:columns-2 justify-center gap-8 sm:gap-32">
          <Image
            alt=""
            height={70}
            width={90}
            src="https://avatars.githubusercontent.com/u/148547831?s=200&v=4"
            priority
            className="rounded-lg object-cover"
          />
          <Image
            alt=""
            src="https://devsoc.app/_next/static/media/CSE.23414f15.jpeg"
            height={70}
            width={90}
            priority
            className="rounded-lg object-cover"
          />
          <Image
            alt=""
            src="https://www.arc.unsw.edu.au/uploads/Arc%20Clubs%20Logo%202019-solid%20green.png"
            height={70}
            width={70}
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 py-3">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">
          Named Legal Entity Parsing & The ABA Conference
        </h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-2 my-7">
          <div className="relative h-44 mb-8">
            <Image
              alt=""
              src={B1}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-44">
            <Image
              alt=""
              src={B3}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-96">
            <Image
              alt=""
              src={B2}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex md:px-0 columns-2 sm:columns-2 justify-center gap-8 sm:gap-32">
          <Image
            alt=""
            height={100}
            width={200}
            src={Jade}
            priority
            className="rounded-lg object-cover"
          />
          <Image
            alt=""
            src={Openlaw}
            height={50}
            width={190}
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="sm:rounded-xl sm:border sm:border-gray-200/30 sm:bg-white sm:backdrop-blur-lg sm:shadow-lg px-6 py-3">
        <h2 className="px-6 md:px-0 w-full text-xl pt-3 font-bold">Algothon</h2>
        <div className="px-6 md:px-0 columns-2 sm:columns-2 my-7">
          <div className="relative h-44 mb-8">
            <Image
              alt=""
              src={A1}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-44">
            <Image
              alt=""
              src={A3}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-96">
            <Image
              alt=""
              src={A2}
              fill
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex md:px-0 columns-2 sm:columns-2 justify-center gap-8 sm:gap-32">
          <Image
            alt=""
            height={100}
            width={200}
            src="https://sponsored.inquirer.com/wp-content/uploads/2023/08/SIG_Blue.png"
            priority
            className="rounded-lg object-cover"
          />
          <Image
            alt=""
            src="https://framerusercontent.com/assets/3jO1MjVcyxB6v1n5bd8IPcRPLI.png"
            height={80}
            width={150}
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
