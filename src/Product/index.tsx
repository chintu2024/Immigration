import React, { useEffect, useState } from "react";
import ProductStyle from "./ProductStyle";
import Layout from "src/Common/Layout";
import ProductsText from "./ProductText";
import LatestUpdateIndex from "src/Home/LatestUpdate";
import Inspiration from "src/Home/Inspiration";
import ProductRight from "../Common/ProductRightSec2";
import Faq from "src/Common/Faq";
import Typography from "src/Common/Typography";

interface Props {
  data?:any;
}

const ProductDetails = (props: Props) => {
  const [according, setAccording] = useState(true);
  // console.log(props.data)
  return (
    <ProductStyle>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9 protMr">
              <ProductsText data={props.data}/>
            </div>
            <div className="col-md-3">
              <ProductRight productRight={true} data={props.data}/>
            </div>
            <div className="col-md-10 mt-5 mx-auto">
            <Typography
              as="p"
              _color="#000"
              _fontSize={["12px", "22px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["20px", "25px"]}
              className="text-center mb-4"
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
              <Inspiration />
            </div>
          </div>
        </div>
      
    </ProductStyle>
  );
};

export default ProductDetails;
