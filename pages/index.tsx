import React from "react";
import LayOut from "src/Common/Layout";
import Home from "src/Home";

interface Props {}

const index = (props: Props) => {
  return (
    
    // <>
    // <ImButton as="button" variant="primaryOutline" fontWeight="500" btnWidth="200px" themeColor={theme} size="medium">Contact</ImButton>
    // <Typography
    //    as="p"
    //    _color="#000"
    //    _fontSize={["64px", "64px"]}
    //    _fontWeight={[800, 800]}
    //    _lineHeight={["76px", "76px"]}
    //     className=""
    //  >
    //    TEST  
    //  </Typography>
    // </>
    <LayOut>
    <Home/>
    </LayOut>
  );
};

export default index;


