import React, { Fragment, useEffect, useState } from "react";
import MainAboutStyle from "./MainAboutStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import { Controller, Scene } from "react-scrollmagic-r18";
import Link from "next/link";

interface Props {}
const MainAbout = (props: Props) => {
  const colors = ["color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8"];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const Carddata: any = data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/home-page-card`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();
        setData(fetchedData);
        console.log("homecard", data)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);
  return (
    <MainAboutStyle>
      <div className="container">
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          {Carddata?.data.slice(0, 8).map((item: any, index: any) => (
            <Scene classToggle="scroll2" pin key={index}>
              <div>
                <div className="maindivtext"></div>
                <div className={`aboutFirst ${colors[index]}`}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="InfoSection_shadow"></div>
                      <Typography
                        as="h3"
                        _color="#fff"
                        _fontSize={["20px", "32px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "35px"]}
                        className="mainTitle text-uppercase mb-4"
                      >
                        <Images
                          src={`${process.env.NEXT_PUBLIC_Images_URL}/public/images/${item.main_category.image}`}
                          alt={"images"}
                          width={77}
                          height={27}
                        ></Images>
                        {item.category_id}
                      </Typography>
                      <Typography
                        as="p"
                        _color="#fff"
                        _fontSize={["20px", "38px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["40px", "52px"]}
                        className="mb-4"
                      >
                        {item.first_title}
                      </Typography>

                      <Typography
                        as="p"
                        _color="#fff"
                        _fontSize={["14px", "16px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "32px"]}
                        className="mb-4"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </Typography>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <Typography
                        as="h3"
                        _color="#fff"
                        _fontSize={["20px", "32px"]}
                        _fontWeight={[400, 400]}
                        _lineHeight={["14px", "40px"]}
                        className="mb-4"
                      >
                        {item.second_title}
                      </Typography>
                      <div className="linkTab">
                        <ul>
                          {item.custom_name1 && (
                            <li>
                             <Link href={item.url1 || "javoscript:void(0)"}>{item.custom_name1}</Link>
                            </li>
                          )}
                          {item.custom_name2 && (
                            <li>
                              <Link href={item.url2 || "javoscript:void(0)"}>{item.custom_name2}</Link>
                            </li>
                          )}
                          {item.custom_name3 && (
                            <li>
                              <Link href={item.url3 || "javoscript:void(0)"}>{item.custom_name3}</Link>
                            </li>
                          )}
                          {item.custom_name4 && (
                            <li>
                              <Link href={item.url4 || "javoscript:void(0)"}>{item.custom_name4}</Link>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="AppyImmigration">
                        <Link href="/contact">{item.name}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Scene>
          ))}
        </Controller>
      </div>
    </MainAboutStyle>
  );
};

export default MainAbout;
