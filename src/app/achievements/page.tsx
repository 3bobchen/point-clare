import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a href="/work">work</a>
        <a href="/volunteering">volunteering</a>
        <a href="/essays">essays</a>
        <a><b>achievements</b></a>
      </div>
    </main>
  )
}