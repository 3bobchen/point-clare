import React from "react";

export function Header(props: { current: string }) {
  const { current } = props;

  return (
    <div className="fixed top-5 right-5 h-14 text-gray-50 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 flex items-center space-x-4 px-6 shadow-sm z-50">
      {current === "home" ? (
        <a>
          <b>home</b>
        </a>
      ) : (
        <a href="/">home</a>
      )}
      {current === "highlights" ? (
        <a>
          <b>highlights</b>
        </a>
      ) : (
        <a href="/achievements">highlights</a>
      )}
      {current === "travel" ? (
        <a>
          <b>travel</b>
        </a>
      ) : (
        <a href="/travel">travel</a>
      )}
      {current === "work" ? (
        <a>
          <b>work</b>
        </a>
      ) : (
        <a href="/work">work</a>
      )}
      {current === "volunteering" ? (
        <a>
          <b>volunteering</b>
        </a>
      ) : (
        <a href="/volunteering">volunteering</a>
      )}
    </div>
  );
}
