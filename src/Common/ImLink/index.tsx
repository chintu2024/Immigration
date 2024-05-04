import Link from "next/link";
import React from "react";

interface ImLinkProps {
  href: string;
  children: any;
  className?: any;
  onClick?: any;
  scroll?: boolean;
  target?: boolean;
}
const ImLink = (props: ImLinkProps) => {
  return (
    <Link
      href={props.href}
      prefetch={false}
      scroll={props.scroll}
      legacyBehavior
    >
      <a
        className={props.className}
        onClick={props.onClick}
        target={props.target ? "_blank" : "_self"}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default ImLink;
