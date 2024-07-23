import React, { useEffect, useState } from "react";
import Typography from "src/Common/Typography";

interface Props {
  countNumber?: any;
  countText?: any;
}

const Count = (props: Props) => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => {
  //       const newCount = prevCount + 1;
  //       if (newCount >= props.countNumber) {
  //         clearInterval(interval);
  //       }
  //       return newCount;
  //     });
  //   }, 0.2);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="numberSec">
      <Typography
        as="p"
        _color="#000"
        _fontSize={["20px", "42px"]}
        _fontWeight={[700, 700]}
        _lineHeight={["30px", "32px"]}
        className="numberText mt-4"
      >
        {/* {count} */}
        {props.countNumber}
        <span>+</span>
      </Typography>
      <Typography
        as="p"
        _color="#28003B"
        _fontSize={["20px", "18px"]}
        _fontWeight={[400, 400]}
        _lineHeight={["30px", "32px"]}
        className="mt-3"
      >
        {props.countText}
      </Typography>
    </div>
  );
};

export default Count;
