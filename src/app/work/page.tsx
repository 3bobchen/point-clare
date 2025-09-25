import React from "react";
import { work_data, WorkDataObject } from "@/app/work/work_data";
import { WorkHistoryObject } from "@/components/Work";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <Header current="work" />
      <div className="w-full px-6 pb-8">
        {work_data.map((work: WorkDataObject, idx: number) => {
          return <WorkHistoryObject key={idx} work={work} />;
        })}
      </div>
    </main>
  );
}
