import React, { useEffect, useState } from "react";
import ProductRightStyle from "./ProductRightStyle";
import Typography from "src/Common/Typography";
import { Calendar } from "react-feather";
import Images from "src/Common/Images";
import RightBlog from "./RightBlog";
import Link from "next/link";
import MainCategory from "./MainCategory";
import { TextInput } from "../TextInput";

interface Props {
  productRight?: any;
  data?: any;
  productName? :any

}

const ProductRight = (props: Props) => {
  console.log("data",props.data)
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blogs`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();

        setBlog(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/categories`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();
        setCategory(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array means this will only run once on mount
  
  return (
    <ProductRightStyle>
      {props.data.navigation &&
      <div className="sideMenu">
      <MainCategory activeIndex={activeIndex} activeSubIndex={activeSubIndex} setActiveIndex={setActiveIndex} setActiveSubIndex={setActiveSubIndex} category={category} productName={props.productName}/>
      </div>}
      {props.data.customAdds && <div className="">
        {props.data.customAdds.slice(0, 1).map((item: any, index: any) => (
          <div key={index}>
            <Link href={item.add_url}>
              <Images
                src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`}
                alt={"add images"}
                width={"100%"}
                className="mt-4"
              ></Images>
            </Link>
          </div>
        ))}

        {/* <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2 mt-4"
        >
          Recent Posts
        </Typography> */}
        {/* {blog && <RightBlog blog={blog} />} */}
      </div>}
      {props.data.keyword_title && props.data.topices && <div className="keyWorkSec">
      <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2"
        >
          {props.data.keyword_title}
        </Typography>
        <ul className="keywordName">
          {props.data.Keyword.map((item: any, index: any) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>}
      {props.data.customAdds.slice(1).map((item: any, index: any) => (
        <div key={index}>
          <Link href={item.add_url}>
            <Images
              src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`}
              alt={"add images"}
              width={"100%"}
              className="mt-4"
            ></Images>
          </Link>
        </div>
      ))}
      
       {props.productRight && props.data.inquiry && (
         <div className="sticSec">
        <div className="mt-4 workForm">
          <Typography
            as="h2"
            _color="#000"
            _fontSize={["20px", "24px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["36px", "38px"]}
            className="mb-2"
          >
            Work
          </Typography>
          <Typography
            as="p"
            _color="#2D3840"
            _fontSize={["12px", "14px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["20px", "22px"]}
            className="mb-2"
          >
            Want to work ? Avail our Job Services
          </Typography>
          <div className="row">
            <div className="col-md-12">
            <TextInput
            name="name"
            // value={""}
            type="text"
            label="Name *"
            variant="label"
            height="40px"
            // maxlength={dropValue.code !== "+91" ? "16" : "10"}
            // error={Boolean(touched.mobile && errors.mobile)}
            // disabled={dropValue.code !== "+91" ? false : true}
          />
            </div>
            <div className="col-md-12 my-3">
            <TextInput
            name="email"
            // value={""}
            type="text"
            label="Email *"
            variant="label"
            height="40px"
            // maxlength={dropValue.code !== "+91" ? "16" : "10"}
            // error={Boolean(touched.mobile && errors.mobile)}
            // disabled={dropValue.code !== "+91" ? false : true}
          />
            </div>
            <div className="col-md-12">
            <TextInput
            name="name"
            // value={""}
            type="text"
            label="Phone *"
            variant="label"
            height="40px"
            // maxlength={dropValue.code !== "+91" ? "16" : "10"}
            // error={Boolean(touched.mobile && errors.mobile)}
            // disabled={dropValue.code !== "+91" ? false : true}
          />
            </div>
            <div className="col-md-12 mt-4">
              <input type="submit" value="Send Message" className="submitBtn" />
            </div>
          </div>
        </div>
       
        <div className="productTxt">
          <Typography
            as="p"
            _color="#040404"
            _fontSize={["16px", "20px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["20px", "20px"]}
            className="mt-3 "
          >
            Don’t know what to do?
          </Typography>
          <Typography
            as="p"
            _color="#B82115"
            _fontSize={["12px", "14px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["20px", "22px"]}
            className="mt-1"
          >
            Let us support you.
          </Typography>
        </div>
        </div>
        )}
    </ProductRightStyle>
  );
};

export default ProductRight;
