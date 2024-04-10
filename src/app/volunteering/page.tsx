import React from "react";
import Image from "next/image";
import {work_data, WorkDataObject} from "@/app/volunteering/work_data";

function WorkHistoryObject(props: { work: WorkDataObject }) {
  const {work} = props;

  const months: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  let month_difference = 0
  let year_difference = 0

  const total_months1 = work.startYear * 12 + work.startMonth
  const total_months2 = (work.endYear ?? new Date().getFullYear()) * 12 + (work.endMonth ?? new Date().getMonth())

  month_difference = total_months2 - total_months1

  while (month_difference >= 12) {
    month_difference -= 12
    year_difference += 1
  }

  return (
    <div className="group flex-col w-full py-3">
      <div
        className="relative border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex-col w-full"
      >
        <div className="flex items-center justify-between">
          <div
            className="absolute bg-white text-gray-600 px-2 rounded-lg right-3 top-3">{`${year_difference != 0 ? year_difference : ""} ${year_difference != 0 ? (year_difference > 1 ? "years" : "year") : ""} ${month_difference} ${month_difference > 1 ? "months" : "month"}`}</div>
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
        {
          work.roles.map((role, idx) => {
            return (
              <div>
                <hr/>
                <div className="my-5 mx-8">
                  <div className="text-lg font-black">{role.roleTitle}</div>
                  <p
                    className="font-mono">{months[role.roleStartMonth - 1]} {role.roleStartYear} - {role.roleEndMonth ? months[role.roleEndMonth - 1] : null} {role.roleEndYear ?? "Present"}</p>
                  <p>
                    {role.roleDescription}
                  </p>
                </div>
              </div>
            )
          })
        }
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