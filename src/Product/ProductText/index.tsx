import React, { useEffect } from "react";
import ProductsTextStyle from "./ProductsTextStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {
  data?: any;
}

const ProductsText = (props: Props) => {
  return (
    <ProductsTextStyle>
      <Images
        src={"images/bannerColor.svg"}
        alt={"images"}
        width={78}
        height={27}
      ></Images>
      {/* <Typography
        as="div"
        _color="#000"
        _fontSize={["30px", "42px"]}
        _fontWeight={[600, 600]}
        _lineHeight={["40px", "54px"]}
        className=""
      >
        </Typography> */}
      <div
        className="headingText"
        dangerouslySetInnerHTML={{ __html: props.data.desc }}
      />

      {props.data.productdata.map((item: any, index: any) => (
        <div key={index}>
           <div className="mt-5"
        dangerouslySetInnerHTML={{ __html: item.productDesc }}/>
        {item.productImage && 
        <div className="text-center mt-5">
          <Images
            src={`${process.env.NEXT_PUBLIC_Images_URL}${item.productImage}`}
            alt={"images"}
            width={"100%"}
            className="mt-4"
          ></Images>
          </div>
          }
        
        {item.prodcuctLink && <div className="mt-5 video"
        dangerouslySetInnerHTML={{ __html: item.prodcuctLink}}/>
         }
        </div>
       
        
      ))}

    </ProductsTextStyle>
  );
};

export default ProductsText;
