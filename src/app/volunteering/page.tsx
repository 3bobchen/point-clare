import React from "react";
import {
  volunteering_data,
  VolunteeringDataObject,
} from "@/app/volunteering/volunteering_data";
import { WorkHistoryObject } from "@/components/Work";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <Header current="volunteering" />
      <div className="w-full px-6 pb-8">
        {volunteering_data.map((work: VolunteeringDataObject, idx: number) => {
          return <WorkHistoryObject key={idx} work={work} />;
        })}
      </div>
    </main>
  );
}
