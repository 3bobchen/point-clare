import React, {Suspense} from "react";
import Image from "next/image";
import {work_data, WorkDataObject} from "@/app/volunteering/work_data";

function WorkHistoryObject(props: {work: WorkDataObject}) {
  const {work} = props;

  return (
    <div className="group flex w-full py-3">
      <div
        // href=""
        // target="_blank"
        className="relative border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between w-full"
      >
        <div className="absolute bg-white text-gray-600 px-2 rounded-lg right-3 top-3">{work.tag}</div>
        <div className="px-6">
          <Image src={work.companyLogo} alt=""
                 width={300} height={100}/>
        </div>
        <div className="flex flex-col self-start w-full p-5 justify-between h-full">
          <div>
            <p className="font-medium text-neutral-900 dark:text-neutral-100 text-xl py-2">
              {work.companyName}
            </p>
            <p className="text-neutral-900">
              {work.location}
            </p>
            <p className="text-sm pt-2 text-neutral-600">
              {work.companyBlurb}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a href="/work">work</a>
        <a><b>volunteering</b></a>
        <a href="/essays">essays</a>
        <a href="/achievements">achievements</a>
      </div>
      <div className="w-full px-6 pb-8">
        {
          work_data.map((work: WorkDataObject, idx: number) => {
            return (
              <WorkHistoryObject
                key={idx}
                work={work}
              />
            )
          })
        }
      </div>
    </main>
  )
}