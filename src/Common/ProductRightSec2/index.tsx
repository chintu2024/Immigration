import React, { useEffect, useState } from "react";
import ProductRightStyle from "./ProductRightStyle";
import Typography from "src/Common/Typography";
import { Calendar } from "react-feather";
import Images from "src/Common/Images";
import RightBlog from "./RightBlog";

interface Props {
  productRight?: any;
  data?:any;
}

const ProductRight = (props: Props) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
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
  return (
    <ProductRightStyle>
      <div className="keyWord">
        <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2"
        >
          {props.data.tagheading}
        </Typography>
        
        <ul className="keywordName">
        {props.data.tagsinsert.map((item: any, index: any) => (
                  <li key={index}>
                    <a href={item.taglink}>{item.taglitle}</a>
                  </li>
                ))}
        </ul>
        <Images
          src={`${process.env.NEXT_PUBLIC_Images_URL}${props.data.image1}`}
          alt={"images"}
          width={"100%"}
          className="mt-4"
        ></Images>
        <Typography
          as="h2"
          _color="#000"
          _fontSize={["20px", "24px"]}
          _fontWeight={[600, 600]}
          _lineHeight={["36px", "38px"]}
          className="mb-2 mt-4"
        >
          Recent Posts
        </Typography>
        {blog && <RightBlog blog={blog} />}
      </div>
      {props.productRight && (
        <Images
          src={`${process.env.NEXT_PUBLIC_Images_URL}${props.data.image2}`}
          alt={"images"}
          width={"100%"}
          className="mt-4"
        ></Images>
      )}
      {props.productRight && (
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
        </div>
      )}
      {props.productRight && (
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
            _color="#ED1C24"
            _fontSize={["12px", "14px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["20px", "22px"]}
            className="mt-1"
          >
            Don’t know what to do?
          </Typography>
        </div>
      )}
    </ProductRightStyle>
  );
};

export default ProductRight;
