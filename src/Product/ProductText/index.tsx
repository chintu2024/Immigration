import React, { useEffect } from "react";
import ProductsTextStyle from "./ProductsTextStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {
  data?: any;
  setProductID?:any; // SetProductID expects a function that takes an ID
}

const ProductsText = (props: Props) => {

  return (
    <ProductsTextStyle>
      {/* <Images
        src={"images/bannerColor.svg"}
        alt={"images"}
        width={78}
        height={27}
      /> */}

      {props.data?.PageContent?.map((item: any, index: any) => (
        <div key={index}>
           {item.product_title && <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2"
        >
          {item.product_title}
        </Typography>}
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          {item.image && (
            <div className="text-center productImages">
              <Images
                src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`}
                alt={"images"}
                className="mt-4"
              />
            </div>
          )}

          {item.url && (
            <div
              className="mt-5 video"
              dangerouslySetInnerHTML={{ __html: item.url }}
            />
          )}
        </div>
      ))}
    </ProductsTextStyle>
  );
};

export default ProductsText;
