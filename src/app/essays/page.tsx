import React, {Suspense} from "react";
import Image from "next/image";

interface EssayLinkProps {
  img: number;
  link: string;
  name: string;
  subtitle: string;
  tag: string;
}

function ChannelLink(props: EssayLinkProps) {
  const {img, link, name, subtitle, tag
  } = props;
  return (
    <div className="group flex w-full py-3">
      <a
        href={link}
        className="relative border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between w-full"
      >
        <div className="absolute bg-white text-gray-600 px-2 rounded-lg left-3 top-3">{tag}</div>
        {
          img == 1 ?
            <Image src="https://agsci.oregonstate.edu/sites/agscid7/files/files/artwork/2002-06sandgren.jpg" alt=""
                   width={300} height={100}/> : null
        }
        {
          img == 2 ?
            <Image src="https://i.pinimg.com/736x/5a/14/8b/5a148b6847922461b5bb93abdb244185.jpg" alt="" width={300} height={10} style={{objectFit: 'cover'}}/> : null
        }
        {
          img == 3 ?
            <Image src="https://media.thepeakmagazine.com.sg/public/2019/02/AI-creativity-paintings.jpg?compress=true&quality=80&w=1080&dpr=1" alt="" width={300} height={10} style={{objectFit: 'cover'}}/> : null
        }
        {
          img == 4 ?
            <Image src="https://www.kabgallery.com/system/wp-content/uploads/2016/01/%E2%80%9CBeach-Study-1-4.9.15-Plein-Air%E2%80%9D-45x45cm-oil-on-canvas-1500x1200.jpeg" alt="" width={300} height={10} style={{objectFit: 'cover'}}/> : null
        }
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
            {
              img == 1 ? "Imagery: A PRAGMATIC POETRY OF MIST, Erik Sandgren" : null
            }
            {
              img == 2 ? "Imagery: Cubist 7p, Thomas C. Fedro" : null
            }
            {
              img == 3 ? "Imagery: Righteous Anger, Ellen Downing" : null
            }
            {
              img == 4 ? "Imagery: Beach Study, Sally West" : null
            }
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
        <a href="/achievements">achievements</a>
      </div>
      <div className="w-full px-6 pb-8">
        <ChannelLink
          img={1}
          name="Packed, Stacked and Attacked"
          link="https://www.linkedin.com/in/3bobchen/"
          subtitle="The importance of administrative tribunal reform that learns from the past and sufficiently protects member independence"
          tag="Law"
        />
        <ChannelLink
          img={2}
          name="Central Bank Digital Currencies"
          link="https://www.linkedin.com/in/3bobchen/"
          subtitle="The new balance between privacy and access in the digital economy"
          tag="Computer Science"
        />
        <ChannelLink
          img={3}
          name="Could an artificially intelligent device practise as a barrister in NSW?"
          link="https://www.linkedin.com/in/3bobchen/"
          subtitle=""
          tag="Law"
        />
        <ChannelLink
          img={4}
          name="I am, You are, We are Australian"
          link="https://www.linkedin.com/in/3bobchen/"
          subtitle="Indigenous settlement in a modern settler state"
          tag="Law"
        />
      </div>
    </main>
  )
}