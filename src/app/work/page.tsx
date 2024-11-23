import React from "react";
import {work_data, WorkDataObject} from "@/app/work/work_data";
import {WorkHistoryObject} from "@/components/Work";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a><b>work</b></a>
        <a href="/volunteering">volunteering</a>
        {/*<a href="/essays">essays</a>*/}
        <a href="/travel">travel</a>
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