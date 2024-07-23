import React, { useEffect, useState } from "react";
import ProductStyle from "./ProductStyle";
import ProductsText from "./ProductText";
import Inspiration from "src/Home/Inspiration";
import ProductRight from "../Common/ProductRightSec2";
import Faq from "src/Common/Faq";
import Typography from "src/Common/Typography";
import Head from "next/head";

interface Props {
  data?:any;
}

const ProductDetails = (props: Props) => {
  const [according, setAccording] = useState(true);
  // console.log(props.data)
  return (
    <ProductStyle>
      <Head>
      {props.data.meta_title && <title>{props.data.meta_title}</title>}
        {props.data.meta_desc && <meta name="description" content={props.data.meta_desc} />}
        {props.data.meta_keyword && <meta name="keywords" content={props.data.meta_keyword} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: props.data.head_tag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: props.data.body_tag }} />
      </Head>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8 protMr">
              <ProductsText data={props.data}/>
            </div>
            <div className="col-md-4">
              <ProductRight productRight={true} data={props.data}/>
            </div>
            <div className="col-md-8 mt-5">
            <Typography
              as="p"
              _color="#000"
              _fontSize={["12px", "24px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["20px", "25px"]}
              className="mb-4"
            >
             {props.data.faqheading}
            </Typography>
              {props.data.faqdata.map((item: any, index: any) => (
                <div key={index}>
                  <Faq
                    according={according}
                    Title={item.faqlitle}
                    des={item.faqdesc}
                  />
                </div>
              ))}
            </div>
            <div className="col-md-12">
              <Inspiration footerdata={props.data.footer_desc}/>
            </div>
          </div>
        </div>
      
    </ProductStyle>
  );
};

export default ProductDetails;
