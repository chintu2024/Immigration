import React, { useEffect, useState } from "react";
import ProductStyle from "./ProductStyle";
import Layout from "src/Common/Layout";
import ProductsText from "./ProductText";
import LatestUpdateIndex from "src/Home/LatestUpdate";
import Inspiration from "src/Home/Inspiration";
import ProductRight from "../Common/ProductRightSec";
import Faq from "src/Common/Faq";

interface Props {}

const ProductDetails = (props: Props) => {
  const [according, setAccording] = useState(true);
  return (
    <ProductStyle>
      <Layout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9 protMr">
              <ProductsText />
            </div>
            <div className="col-md-3">
              <ProductRight productRight={true} />
            </div>
            <div className="col-md-10 mt-5 mx-auto">
              {[...Array(5)].map((item: any, index: any) => (
                <div key={index}>
                  <Faq
                    according={according}
                    Title={
                      "Who is the perfect candidate for the Canadian work permit?"
                    }
                    data={
                      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    }
                  />
                </div>
              ))}
            </div>
            <div className="col-md-12">
              <Inspiration />
            </div>
          </div>
        </div>
      </Layout>
    </ProductStyle>
  );
};

export default ProductDetails;
