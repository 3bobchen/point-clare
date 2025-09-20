import React from "react";
import Image from "next/image";

import A1 from "../../../public/achievements/489698761_1488408432403570_345089709994515814_n.jpg";
import A2 from "../../../public/achievements/IMG_5730.jpeg";
import A3 from "../../../public/achievements/489567295_1488408299070250_2526129421879026284_n.jpg";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a>
          <b>achievements</b>
        </a>
        <a href="/travel">the world</a>
        <a href="/work">work</a>
        <a href="/volunteering">volunteering</a>
      </div>

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
      <div className="flex px-6 md:px-0 columns-2 sm:columns-2 justify-center gap-32">
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
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
