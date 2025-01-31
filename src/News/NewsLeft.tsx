import Link from "next/link";
import React, { useEffect, useState } from "react";
import Images from "src/Common/Images";
import Typography from "src/Common/Typography";
import styled from "styled-components";

interface Props {
}

const NewsLeft = (props: Props) => {
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const newsdata:any = news
  // console.log("newsNews", newsdata?.data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/news`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();

        setNews(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);
  return (
    <TopSroty>
      <div className="topNew">
        <Typography
          as="h4"
          _color="#000"
          _fontSize={["14px", "24px"]}
          _fontWeight={[700, 700]}
          _lineHeight={["14px", "50px"]}
          className=""
        >
          Top Stories
        </Typography>
        {newsdata?.data.slice(0,4).reverse().map((item: any, index: any) => {
          return (
            <div className="topStoryList" key={index}>
              <Typography
                as="h4"
                _color="#000"
                _fontSize={["14px", "16px"]}
                _fontWeight={[400, 500]}
                _lineHeight={["14px", "24px"]}
                className="maintitle"
              >
                <Link href={`/news/${String(item.seourl).toLowerCase().replace(/\s+/g, "-")}`}>
                {item.title}
                </Link>
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
          );
        })}
        <div className="topListAdd mt-5">
          <Link href={""}>
            <Images
              src={"/images/image-303.png"}
              alt={"images"}
              width="100%"
            ></Images>
          </Link>
        </div>
      </div>
    </TopSroty>
  );
};

export default NewsLeft;
export const TopSroty = styled.div`
  .listCar {
    border-bottom: 1px solid #c0c0c0;
  }
  .listCar::-webkit-scrollbar-thumb {
  background: #fffbf2; 
  border: none;
}
.listCar::-webkit-scrollbar-track {
  background: #fffbf2; 
}
.maintitle{
  a{
    :hover{
      text-decoration: underline;
    }
  }
}
`;
