import React, { useEffect, useState } from "react";
import Link from "next/link";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import styled from "styled-components";
import NewsLeft from "./NewsLeft";
import NewsStyle from "./NewsStyle";
import PageLoader from "src/Common/PageLoader";


interface Props {
  data?: any;
  slug?: any;
}

const NewscartPages = (props: Props) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(false); // State to track loading status
  const [data, setData] = useState<any[]>(props.data?.data || []); // Initialize with props data

  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: any = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

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
        setVisibleItems((prev) => Math.min(prev + 10, data.length)); // Increase visible items
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
    <NewsStyle>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8">
            <Typography
              as="h4"
              _color="#000"
              _fontSize={["14px", "32px"]}
              _fontWeight={[700, 700]}
              _lineHeight={["14px", "50px"]}
            >
              {props.slug} News
            </Typography>

            {data.slice(0, visibleItems).map((item: any, index: number) => {
              return (
                <div className="newlist" key={index}>
                  <div className="newsTextSec">
                    <Typography
                      as="h4"
                      _color="#1A0DAB"
                      _fontSize={["14px", "20px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["14px", "28px"]}
                      className="maintitle2"
                    >
                      <Link href={`/news/${String(item.seourl).toLowerCase().replace(/\s+/g, "-")}`}>
                        {item.title}
                      </Link>
                    </Typography>
                    <Typography
                      as="p"
                      _color="#5E7384"
                      _fontSize={["14px", "14px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["14px", "20px"]}
                      className="py-2"
                    >
                      {formatDate(item.publish_date)}
                    </Typography>
                    <Typography
                      as="p"
                      _color="#000"
                      _fontSize={["14px", "16px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["14px", "20px"]}
                      className=""
                    >
                      <div
                        className="mt-2 catdis"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </Typography>
                    <div className="listCar">
                      {item.category_id && JSON.parse(item.category_id)?.map((category: string, catIndex: number) => {
                        return (
                          <Link
                            href={`/news/category/${String(category).replace(/\s+/g, "-")}`}
                            key={catIndex}
                            className="listcat"
                            style={{ background: "#ffeeee" }}
                          >
                            {category}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="newsimages">
                    <Link href={`/news/${String(item.seourl).toLowerCase().replace(/\s+/g, "-")}`}>
                      <Images
                        src={
                          item.image
                            ? `${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.image}`
                            : "/images/elaar.jpg"
                        }
                        alt={item.title}
                        width={120}
                        height={120}
                        className="NewsThem"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}

            {loading && <PageLoader/>} {/* Loader appears here */}
          </div>
          <div className="col-md-4">
            <div className="NewsLeft">
              <NewsLeft />
            </div>
          </div>
        </div>
      </div>
    </NewsStyle>
  );
};

export default NewscartPages;
