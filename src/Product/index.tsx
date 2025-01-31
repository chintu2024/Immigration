import React, { useEffect, useState } from "react";
import ProductStyle from "./ProductStyle";
import ProductsText from "./ProductText";
import Inspiration from "src/Home/Inspiration";
import ProductRight from "../Common/ProductRightSec2";
import Faq from "src/Common/Faq";
import Typography from "src/Common/Typography";
import Head from "next/head";
import PageCard from "./ProductText/PageCard";

interface Props {
  data?:any;
}

const ProductDetails = (props: Props) => {
  const [according, setAccording] = useState(true);
  const [productID, setProductID] = useState();
  // console.log("data", props.data)
  useEffect(() => {
    if (props.data) {
      // Set the product ID to the first item's ID on component load
      setProductID(props.data.name);
    }
  }, [props.data, setProductID]); // Dependency array
  return (
    <ProductStyle>
      <Head>
      {props.data.metaTag && <title>{props.data.metaTag}</title>}
        {props.data.meta_desc && <meta name="description" content={props.data.meta_desc} />}
        {props.data.meta_tag_key && <meta name="keywords" content={props.data.meta_tag_key} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: props.data.dynamic_head }} />
      </Head>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12  mx-auto">
              <PageCard data={props.data}/>
            </div>
            <div className={(props.data.customAdds.length > 0 || props.data.topices === true || props.data.navigation === true || props.data.inquiry === true) ? "col-md-8 protMr" : "col-md-12 protMr"}>
              <ProductsText data={props.data}/>
            </div>
            {(props.data.customAdds.length > 0 || props.data.topices === true || props.data.navigation === true || props.data.inquiry === true) && (
                <div className="col-md-4">
                  <ProductRight productRight={true} data={props.data} productName={productID} />
                </div>
              )}
          </div>
        </div>
        {props.data.faq_title && <div className="faqBack">
        <div className="container py-5">
          <div className="row">
              <div className="col-md-10 offset-md-2 mx-auto">
              <Typography
              as="p"
              _color="#000"
              _fontSize={["12px", "24px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["20px", "25px"]}
              className="text-center mb-4"
            >
             {props.data.faq_title}
            </Typography>
              {props.data.faqs.map((item: any, index: any) => (
                <div key={index}>
                  <Faq
                    according={according}
                    Title={item.name}
                    des={item.description}
                  />
                </div>
              ))}
              </div>
          </div>
        </div>
        </div>}
        {props.data.footer_desc && <div className="container">
          <div className="row">
          <div className="col-md-12">
              <Inspiration footerdata={props.data.footer_desc}/>
            </div>
          </div>
        </div>}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: props.data.dynamic_body }} />
    </ProductStyle>
  );
};

export default ProductDetails;
