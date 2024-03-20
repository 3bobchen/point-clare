import Image from "next/image";
import Headshot from "../../public/IMG_3344.jpeg";
import Headshot2 from "../../public/IMG_3344 copy.jpeg"
import ABA from "../../public/IMG_5859.jpeg";
import Accenture from "../../public/IMG_6939.jpg";
import Fintech from '../../public/1708689451154.jpg'
import DevSoc from "../../public/1708676099763.jpg"
import Fintech2 from '../../public/1708689483040.jpg'
import {Suspense} from "react";

interface ChannelLinkProps {
  img: string;
  link: string;
  name: string;
  site: string;
}

function ChannelLink(props: ChannelLinkProps) {
  const {img, link, name, site} = props;
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16"
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              {site}
            </Suspense>
          </div>
        </div>
        <div
          className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-3xl m-auto">
      <div className="flex flex-row w-full items-start gap-8 px-6 py-8">
        <a>home</a>
        <a>work</a>
        <a>volunteering</a>
        <a>essays</a>
      </div>
      <h1 className="px-6 py-8 text-2xl">Hello, I'm Bob 👋</h1>
      <div className="columns-2 sm:columns-3 gap-4 my-8 px-6">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={DevSoc}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={Fintech}
            fill
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={Accenture}
            fill
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={ABA}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={Fintech2}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={Headshot}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <p className="text-justify px-6">
        💼 Legal and financial services sector experience utilising technology for digital transformation
        <br/>
        📚 STEM and humanities background in Computer Science and Law Degrees
        <br/>
        👁️ Well informed, widely travelled, immensely curious and a consistent employer of critical thought
        <br/>
        🌟 Strong leadership initiative with a record of empowering productive teams and good governance
        <br/>
        🗳️ Participation in a variety of interest and career student groups, public forums and competitions
        <br/><br/>
        Bob is currently a Software Engineer at Macquarie Group where he is working with a Banking and Financial
        Services aligned engineering team delivering on updates to the Macquarie home and car loan portals.
        <br/><br/>
        Bob is proud of his experience having been able to contribute to meaningful organisations and projects via his
        work. This especially includes his time at Jade.io and his foundational work on brief.bar as well as
        contributions to OpenLaw, Little William Bourke, LawStream and LawFluent. He further is pleased with his
        experiences at startups Volt Bank and Voly.
        <br/><br/>
        Outside of work, Bob is an active participant in extracurricular university programs having held the presidency
        of two different societies. Bob is especially pleased with his work at UNSW Fintech with respect to good project
        management in the SIG Algothon and good governance changes. Further, the free and open source projects of DevSoc
        are a worthy cause that serves student developers and the UNSW community well.
      </p>
      <div className="w-full px-6 py-8 columns-2">
        <ChannelLink
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          name="LinkedIn"
          link="https://www.linkedin.com/in/3bobchen/"
          site="@3bobchen"
        />
        <ChannelLink
          img="https://www.iconpacks.net/icons/2/free-briefcase-icon-1965-thumb.png"
          name="Work Experiences"
          link="/"
          site=""
        />
      </div>
      <div className="w-full px-6 pb-8 columns-2">
        <ChannelLink
          img="https://cdn.icon-icons.com/icons2/1520/PNG/512/cogflat_106041.png"
          name="Other Experiences"
          link="https://www.linkedin.com/in/3bobchen/"
          site=""
        />
        <ChannelLink
          img="https://cdn-icons-png.flaticon.com/512/1047/1047295.png"
          name="Essays"
          link="https://www.linkedin.com/in/3bobchen/"
          site=""
        />
      </div>
      <div className="w-full px-6 pb-8 columns-2">
        <ChannelLink
          img="https://cdn-icons-png.freepik.com/512/8576/8576843.png"
          name="Key Achievements"
          link="https://www.linkedin.com/in/3bobchen/"
          site=""
        />
      </div>
    </main>
  );
}
