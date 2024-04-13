'use client'
import React, {Suspense} from "react";
import Image from "next/image";
import essays, {EssayObject} from "./essay_data";

interface PictureLinkProps {
  img: string;
  link: string;
  name: string;
  subtitle: string;
  tag: string;
  credit: string;
}

function PictureLink(props: PictureLinkProps) {
  const {img, link, name, subtitle, tag, credit
  } = props;
  return (
    <div className="group flex w-full py-3">
      <a
        href={link}
        target="_blank"
        className="relative border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between w-full"
      >
        <div className="absolute bg-white text-gray-600 px-2 rounded-lg left-3 top-3">{tag}</div>
        <Image src={img} alt=""
                   width={300} height={100}/>
        <div className="flex flex-col self-start w-full p-5 justify-between h-full">
          <div>
            <p className="font-medium text-neutral-900 dark:text-neutral-100 text-xl py-2">
              {name}
            </p>
            <Suspense fallback={<p className="h-6"/>}>
              {subtitle}
            </Suspense>
          </div>
          <p className="text-xs">
            {credit}
          </p>
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
    <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a href="/">home</a>
        <a href="/work">work</a>
        <a href="/volunteering">volunteering</a>
        <a><b>essays</b></a>
        <a href="/travel">travel</a>
      </div>
      <div className="w-full px-6 pb-8">
        {
          essays.map((essay: EssayObject, idx: number) => {
            return (
              <PictureLink
                key={idx}
                img={essay.imageURL}
                credit={essay.imageCredit}
                name={essay.title}
                link={essay.url === "" ? essay.essayFilepath : essay.url}
                subtitle={essay.subtitle}
                tag={essay.tag}
              />
            )
          })
        }
      </div>
    </main>
  )
}