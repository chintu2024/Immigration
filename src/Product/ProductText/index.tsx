import React, { useEffect } from "react";
import ProductsTextStyle from "./ProductsTextStyle";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";

interface Props {}

const ProductsText = (props: Props) => {
  return (
    <ProductsTextStyle>
      <Images
        src={"images/bannerColor.svg"}
        alt={"images"}
        width={78}
        height={27}
      ></Images>
      <Typography
        as="h2"
        _color="#000"
        _fontSize={["30px", "42px"]}
        _fontWeight={[600, 600]}
        _lineHeight={["40px", "54px"]}
        className="mt-2"
      >
        Work in Canada: Canadian Work Permit & Visa Process
      </Typography>
      <Typography
        as="p"
        _color="#000"
        _fontSize={["18px", "22px"]}
        _fontWeight={[400, 400]}
        _lineHeight={["34px", "38px"]}
        className="mt-4"
      >
        Canada attracts foreign workers and entrepreneurs because of its diverse
        and bustling economy. Non-Canadians who wish to work in the country
        legally will require a work permit to do so. A foreigner may be eligible
        for the various Canada Work Permit Visa options if they meet specific
        requirements. This guide will describe each type of work visa and its
        requirements.
      </Typography>
      <Images
        src={"images/p1.jpg"}
        alt={"images"}
        width={"100%"}
        className="mt-4"
      ></Images>

      <Typography
        as="h4"
        _color="#000"
        _fontSize={["20px", "24px"]}
        _fontWeight={[600, 600]}
        _lineHeight={["36px", "40px"]}
        className="mt-4"
      >
        How we can help you to get temporary foreign worker program
      </Typography>

      <div className="text-center">
        <Images
          src={"images/p2.jpg"}
          alt={"images"}
          width={"90%"}
          className="mt-4"
        ></Images>
      </div>

      <Typography
        as="h4"
        _color="#000"
        _fontSize={["20px", "24px"]}
        _fontWeight={[600, 600]}
        _lineHeight={["36px", "40px"]}
        className="mt-4"
      >
        Basic Steps for Temporary foreign worker program
      </Typography>

      <Typography
        as="p"
        _color="#000"
        _fontSize={["18px", "22px"]}
        _fontWeight={[400, 400]}
        _lineHeight={["34px", "38px"]}
        className="mt-4"
      >
        British Columbia Provincial Nominee Program (BC PNP) is an immigration
        program offered by the Government of British Columbia. It has unique
        streams and categories to select and nominate foreign-skilled workers,
        international graduates, post-graduates, health workers and
        entrepreneurs. Each BC PNP Program has distinct eligibility requirements
        catering to different categories of immigrants willing to move to
        British Columbia.
      </Typography>

      <Images
        src={"images/p3.jpg"}
        alt={"images"}
        width={"100%"}
        className="mt-4"
      ></Images>

      <Typography
        as="h4"
        _color="#000"
        _fontSize={["20px", "24px"]}
        _fontWeight={[600, 600]}
        _lineHeight={["36px", "40px"]}
        className="mt-4"
      >
        Benefits of Canadian Work Permit
      </Typography>
    </ProductsTextStyle>
  );
};

export default ProductsText;
