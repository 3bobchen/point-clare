import Image from "next/image";
import Headshot from "../../public/IMG_3344.jpeg";
import ABA from "../../public/IMG_5859.jpeg";
import Accenture from "../../public/IMG_6939.jpg";
import Fintech from '../../public/1708689451154.jpg'
import DevSoc from "../../public/1708676099763.jpg"
import Fintech2 from '../../public/1708689483040.jpg'
import React, {Suspense} from "react";

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
        target={img == "li" ? "_blank" : ""}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-5 flex-row align-middle">
          {
            img == "li" ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                               className="bi bi-linkedin" viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg> : null
          }
          {
            img == "we" ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                               className="bi bi-briefcase-fill" viewBox="0 0 16 16">
              <path
                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
              <path
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
            </svg> : null
          }
          {
            img == "oe" ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                               className="bi bi-chat-left-quote-fill" viewBox="0 0 16 16">
              <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm7.194 2.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
            </svg> : null
          }
          {
            img == "e" ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                              className="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
              <path
                d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
            </svg> : null
          }
          {
            img == "a" ?
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-stars"
                   viewBox="0 0 16 16">
                <path
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
              </svg> : null
          }
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6"/>}>
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
        <a><b>home</b></a>
        <a href="/work">work</a>
        <a href="/volunteering">volunteering</a>
        <a href="/essays">essays</a>
        <a href="/achievements">achievements</a>
      </div>
      <h1 className="px-6 py-8 text-3xl font-medium">Bob Chen</h1>
      <div className="columns-2 sm:columns-3 gap-4 my-8 px-6">
        <div className="relative h-40 mb-4">
          <Image
            alt="My Software Development Society Team"
            src={DevSoc}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="My Fintech Society Team"
            src={Fintech}
            fill
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Being awarded 2nd place at Accenture's Tech Bootcamp"
            src={Accenture}
            fill
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Representing JADE at the 2023 Australian Bar Association's Annual Conference"
            src={ABA}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Achieving affiliation with the UNSW Business School"
            src={Fintech2}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="A photo of me."
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
          img="li"
          name="LinkedIn"
          link="https://www.linkedin.com/in/3bobchen/"
          site="@3bobchen"
        />
        <ChannelLink
          img="we"
          name="Work Experiences"
          link="/work"
          site=""
        />
      </div>
      <div className="w-full px-6 pb-8 columns-2">
        <ChannelLink
          img="oe"
          name="Other Experiences"
          link="/volunteering"
          site=""
        />
        <ChannelLink
          img="e"
          name="Essays"
          link="/essays"
          site=""
        />
      </div>
      <div className="w-1/2 pl-6 pr-3 pb-8">
        <ChannelLink
          img="a"
          name="Achievements"
          link="/achievements"
          site=""
        />
      </div>
    </main>
  );
}
