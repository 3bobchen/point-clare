'use client'

import React from "react";
import WorldMap from "react-svg-worldmap";

export default function Page() {
  const data = [
    { country: "cn", value: 1 },
    { country: "au", value: 1 },
    { country: "us", value: 1 },
    { country: "ca", value: 1 },
    { country: "ad", value: 1 },
    { country: "at", value: 1 },
    { country: "fr", value: 1 },
    { country: "de", value: 1 },
    { country: "hu", value: 1 },
    { country: "it", value: 1 },
    { country: "li", value: 1 },
    { country: "mc", value: 1 },
    { country: "nl", value: 1 },
    { country: "nz", value: 1 },
    { country: "va", value: 1 },
    { country: "sg", value: 1 },
    { country: "sk", value: 1 },
    { country: "es", value: 1 },
    { country: "ch", value: 1 },
    { country: "th", value: 1 },
    { country: "gb", value: 1 },
    { country: "vn", value: 1 },
    { country: "cz", value: 1 },
  ];

  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a href="/work">work</a>
        <a href="/volunteering">volunteering</a>
        <a href="/essays">essays</a>
        <a><b>travel</b></a>
      </div>
      <WorldMap
        color="black"
        value-suffix="people"
        size="responsive"
        data={data}
        backgroundColor="transparent"
      />
      <h3>{data.length} countries and counting</h3>
    </main>
  )
}