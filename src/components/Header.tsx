import React from "react";

export function Header(props: { current: string }) {
  const { current } = props;

  return (
    <div className="fixed top-5 right-2 sm:right-5 h-14 text-gray-50 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 flex items-center px-6 shadow-sm z-50">
      {current === "home" ? (
        <a className="relative px-1 sm:px-3 py-1 rounded-full text-sm text-white hover:text-gray-200 before:absolute before:inset-0 before:rounded-full before:bg-white/30  before:z-0 z-10">
          <b>home</b>
        </a>
      ) : (
        <a
          href="/"
          className="relative px-1 sm:px-3 hover:rounded-full text-sm hover:text-gray-200 hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-white/30  hover:before:z-0 hover:z-10"
        >
          home
        </a>
      )}
      {current === "highlights" ? (
        <a className="relative px-1 sm:px-3 rounded-full text-sm text-white hover:text-gray-200 before:absolute before:inset-0 before:rounded-full before:bg-white/30  before:z-0 z-10">
          <b>highlights</b>
        </a>
      ) : (
        <a
          href="/achievements"
          className="relative px-1 sm:px-3 hover:rounded-full text-sm hover:text-gray-200 hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-white/30  hover:before:z-0 hover:z-10"
        >
          highlights
        </a>
      )}
      {current === "travel" ? (
        <a className="relative px-1 sm:px-3 rounded-full text-sm text-white hover:text-gray-200 before:absolute before:inset-0 before:rounded-full before:bg-white/30  before:z-0 z-10">
          <b>travel</b>
        </a>
      ) : (
        <a
          href="/travel"
          className="relative px-1 sm:px-3 hover:rounded-full text-sm hover:text-gray-200 hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-white/30  hover:before:z-0 hover:z-10"
        >
          travel
        </a>
      )}
      {current === "work" ? (
        <a className="relative px-1 sm:px-3 rounded-full text-sm text-white hover:text-gray-200 before:absolute before:inset-0 before:rounded-full before:bg-white/30  before:z-0 z-10">
          <b>work</b>
        </a>
      ) : (
        <a
          href="/work"
          className="relative px-1 sm:px-3 hover:rounded-full text-sm hover:text-gray-200 hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-white/30  hover:before:z-0 hover:z-10"
        >
          work
        </a>
      )}
      {current === "volunteering" ? (
        <a className="relative px-1 sm:px-3 rounded-full text-sm text-white hover:text-gray-200 before:absolute before:inset-0 before:rounded-full before:bg-white/30  before:z-0 z-10">
          <b>volunteering</b>
        </a>
      ) : (
        <a
          href="/volunteering"
          className="relative px-1 sm:px-3 hover:rounded-full text-sm hover:text-gray-200 hover:before:absolute hover:before:inset-0 hover:before:rounded-full hover:before:bg-white/30  hover:before:z-0 hover:z-10"
        >
          volunteering
        </a>
      )}
    </div>
  );
}
