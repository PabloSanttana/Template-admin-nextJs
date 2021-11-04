import React from "react";
import Link from "next/link";

interface HeaderItemProps {
  url: string;
  text: string;
  icon: any;
}

export function HeaderItem(props: HeaderItemProps) {
  return (
    <li className={` hover:bg-gray-100`}>
      <Link href={props.url}>
        <a className={`flex flex-col justify-center items-center w-20 h-20 `}>
          {props.icon}
          <span className={`text-xs font-light text-gray-600`}>
            {props.text}
          </span>
        </a>
      </Link>
    </li>
  );
}
