import React from "react";

interface Props {
  src: any;
  alt: string;
  lazy?: boolean;
  width?: any;
  height?: any;
  className?: string;
}

const Images = (props: Props) => {
  return (
    <img
      src={props.src}
      alt={props.alt ? props.alt : "images"}
      className={props.className}
      width={props.width ? props.width : "auto"}
      height={props.height ? props.height : "auto"}
      loading={props.lazy ? "lazy" : "eager"}
    />
  );
};
export default Images;
