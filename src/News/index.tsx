import Link from "next/link";
import React, { useEffect, useState } from "react";
import Images from "src/Common/Images";
import PageLoader from "src/Common/PageLoader";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {
  newsData?: any;
  slug?:any;
}

const NewsIndexPage = (props: Props) => {
  const [visibleItems, setVisibleItems] = useState(16);
  const [loading, setLoading] = useState(false); // State to track loading status
  const [data, setData] = useState<any[]>(props.newsData?.data || []); // Initialize with props data
  // console.log("newsData", props.newsData.data);
    // Function to load more items on scroll
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      // console.log("totalHeight",totalHeight)
      // console.log("scrollPosition",scrollPosition)
      if (scrollPosition >= totalHeight) {
        loadMoreItems();
      }
    };
  
    const loadMoreItems = () => {
      if (visibleItems < data.length) {
        setLoading(true);
        setTimeout(() => {
          setVisibleItems((prev) => Math.min(prev + 8, data.length)); // Increase visible items
          setLoading(false); // Stop loading after fetching
        }, 1000); // Simulate loading time
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [visibleItems, data.length]); // Re-run effect if visibleItems or data.length change
  return (
    <NewsIndexStyle>
      <div className="container">
        <div className="row">
          <Typography
            as="h4"
            _color="#000"
            _fontSize={["14px", "36px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["14px", "55px"]}
            className=""
          >
            Trending News
          </Typography>
          {props.newsData.data.reverse().slice(0, visibleItems).map((item: any, index: any) => {
            return (
              <div className="col-md-3 my-3" key={index}>
                <div className="newList">
                    <Link href={`/news/${String(item.seourl).toLowerCase().replace(/\s+/g, "-")}`}>
                  <Images
                    src={
                      item.image
                        ? `${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`
                        : "/images/elaar.jpg"
                    }
                    alt={"images"}
                    width="100%"
                    className="newImages"
                  ></Images>
                  </Link>
                  <Typography
                    as="h3"
                    _color="#000"
                    _fontSize={["14px", "20px"]}
                    _fontWeight={[600, 600]}
                    _lineHeight={["14px", "34px"]}
                    className="mainTitle"
                  >
                    <Link href={`/news/${String(item.seourl).toLowerCase().replace(/\s+/g, "-")}`}>{item.title}</Link>
                  </Typography>
                  <div className="listCar">
                    {item.category_id && JSON.parse(item.category_id)?.map((category: string, catIndex: number) =>{
                      return (
                        <Link
                        href={`/news/category/${String(category).replace(/\s+/g, "-")}`}
                          key={index} // Ensure a unique key
                          className="listcat"
                          style={{ background: "#ffeeee" }} // Ensure item.color is a valid color
                        >
                          {category}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {loading && <PageLoader/>} {/* Loader appears here */}
    </NewsIndexStyle>
  );
};

export default NewsIndexPage;
export const NewsIndexStyle = styled.section`
  .newImages {
    object-fit: cover;
    border-radius: 8px;
    height: 250px;
  }
  .mainTitle {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
  }
  .listCar {
    white-space: nowrap;
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        gap: 10px;
        overflow-x: auto !important;
    /* scrollbar-color:#fffbf2 !important; */
    margin: 10px 0px;
    padding-bottom: 10px;
  }
  ::-webkit-scrollbar {
    width: 30px;
    height: 12px;
    /* background-color: #fffbf2; */
  }
  .listCar::-webkit-scrollbar-thumb {
  background: #fff; 
}
  .listcat {
    border-radius: 25px;
    padding: 3px 8px;
    font-size: 12px;
  }
`;
