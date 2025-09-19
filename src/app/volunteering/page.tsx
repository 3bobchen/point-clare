import React from "react";
import {volunteering_data, VolunteeringDataObject} from "@/app/volunteering/volunteering_data";
import {WorkHistoryObject} from "@/components/Work";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a href="/work">work</a>
        <a><b>volunteering</b></a>
        {/*<a href="/essays">essays</a>*/}
        <a href="/travel">the world</a>
      </div>
      <div className="w-full px-6 pb-8">
        {
          volunteering_data.map((work: VolunteeringDataObject, idx: number) => {
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