import React from "react";

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
    </main>
  )
}