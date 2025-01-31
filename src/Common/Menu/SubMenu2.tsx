import React, { useEffect, useState } from "react";
import SubSubmenu from "./SubSubmenu";
import Typography from "../Typography";
import { menuData } from "./menuData";
import Link from "next/link";
import styled from "styled-components";
import SubSubmenu2 from "./SubSubmenu2";

interface Props {
  id?: any;
  index?: any;
  setmenutoggale?: any;
  menutoggale?: any;
}

const SubMenu2 = (props: Props) => {
  const showMegaBack = ["back1", "back2", "back3", "back4", "back5", "back6" , "back7" , "back8"];
  const categoryId = props.id;
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [subMenuData, setSubMenuData] = useState(null);
  // const subMenuDatatest:any = subMenuData
  // console.log("Submenu data set:", subMenuData);

  const [data, setData] = useState();
  // const [data, setData] = useState(() => {

  //   const cachedData = localStorage.getItem(`subMenu_${categoryId}`);
  //   return cachedData ? JSON.parse(cachedData) : null;
  // });
  const subMenu: any = data;
  useEffect(() => {
    const fetchData = async () => {
      // if (data) {
      //   Data already loaded from localStorage
      //   return;
      // }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/sub-category/${categoryId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();
        // localStorage.setItem(`subMenu_${categoryId}`, JSON.stringify(fetchedData));
        setData(fetchedData);
        if (
          !hoveredItem &&
          fetchedData &&
          fetchedData.data &&
          fetchedData.data.length > 0
        ) {
          setHoveredItem(fetchedData.data[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [hoveredItem, subMenuData]);
  // [categoryId, data]
  return (
    <>
      {subMenu && subMenu.data && subMenu.data.length > 0 && (
          <div
            className={
              props.menutoggale === true ? "mega-box menuHide" : "mega-box"
            }
          >
                    <StyleSub2 subSubMenu={subMenuData}>
            <div className={`content ${showMegaBack[props.index]}`}>
              <div className="col-md-3">
              <div className="manuTabTitle">
                {props.index === 0 && (
                  <div className="menutitle">
                    <Typography
                      as="h2"
                      _color="#000"
                      _fontSize={["18px", "30px"]}
                      _fontWeight={[500, 500]}
                      _lineHeight={["24px", "40px"]}
                      className=""
                    >
                      Making <br />immigration 
                      easier, step by step
                    </Typography>
                  </div>
                )}
                {props.index === 1 && (
                  <div className="menutitle">
                    <Typography
                      as="h2"
                      _color="#000"
                      _fontSize={["18px", "30px"]}
                      _fontWeight={[400, 400]}
                      _lineHeight={["24px", "40px"]}
                      className=""
                    >
                      Elevate Your Career with the Canadian Work Permit
                    </Typography>
                  </div>
                )}
                {1 < props.index && (
                  <div className="menutitle">
                    <Typography
                      as="h2"
                      _color="#000"
                      _fontSize={["18px", "30px"]}
                      _fontWeight={[500, 500]}
                      _lineHeight={["24px", "40px"]}
                      className=""
                    >
                      Making <br/>immigration <br />
                      easier, step by step
                    </Typography>
                  </div>
                )}
                <ul className="menuLink mt-4">
                  <li>
                    <Link href="/testimonials">
                      <img
                        src="/images/icon/message-square.svg"
                        alt="images"
                        width="24px"
                        height="24px"
                      />{" "}
                      Customer Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <img
                        src="/images/icon/notifications-alert-circle.svg"
                        alt="images"
                        width="24px"
                        height="24px"
                      />{" "}
                      Why Trust Ellar
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <img
                        src="/images/icon/minus.svg"
                        alt="images"
                        width="24px"
                        height="24px"
                      />{" "}
                      Let’s talk
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="col-md-3">
  {subMenu.data.map((item: any, index: any) => {
    const isHovered = hoveredItem === item.id; // Check if the item is hovered

    return (
      <div
        key={index}
        onMouseOver={() => setHoveredItem(item.id)}
        onMouseOut={() => setHoveredItem(item.id)} // Optional: reset hover state on mouse out
      >
        <header
          onClick={() => props.setmenutoggale(true)}
          className={isHovered ? 'hovered-header' : ''} // Apply class based on hover state
        >
          {/* <Link
            href={`/${item.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {item.name}
          </Link> */}
          <Link
            href={`/${item.slug}`}
          >
            {item.name}
          </Link>
        </header>
        {/* <SubSubmenu
          sub_category={item.id}
          setmenutoggale={props.setmenutoggale}
        /> */}
        {/* <SubSubmenu2
          sub_category={item.id}
          setmenutoggale={props.setmenutoggale}
        /> */}
      </div>
    );
  })}
</div>

              <div className="col-md-6">
                <SubSubmenu2
                  sub_category={hoveredItem}
                  setmenutoggale={props.setmenutoggale}
                  setsubSubMenu={setSubMenuData}
                />
              </div>
              {/* <div className="col-md-3">
              <ul className="menuLink">
                <li>
                  <Link href="/testimonials"><img src="/images/icon/message-square.svg" alt="images" width="24px" height="24px"/> Customer Stories</Link>
                </li>
                <li>
                  <Link href="/about-us"><img src="/images/icon/notifications-alert-circle.svg" alt="images" width="24px" height="24px"/> Why Trust Ellar</Link>
                </li>
                <li>
                  <Link href="/contact-us"><img src="/images/icon/minus.svg" alt="images" width="24px" height="24px"/> Let’s talk</Link>
                </li>
              </ul>
            </div> */}
            </div>
            </StyleSub2>
          </div>
      )}
    </>
  );
};

export default SubMenu2;

export const StyleSub2 = styled("div")<{subSubMenu: any }>`
  .content .col-md-3 header {
    padding: 10px 8px;
  }
  .manuTabTitle{
    padding-right: 30px;
  }
  .content .col-md-3 header a {
    padding: 0px;
    font-weight: 500;
    display: block;
    padding-right: 28px;
  }
  .content .col-md-3 header::before {
    background: none;
  }
  .content .col-md-3 header::after {
    top: 16px;
  }
  .subSubMenuDiv {
    background: #ffffff14;
    min-height: 350px;
    padding: 20px 8px;
  }
  .mega-links.subsubmenu2 li::before {
    top: 8px;
  }
  .hovered-header{
    background-color: #ffffff14;
  }
  .content .col-md-3 header::after{
    background-image: ${(props) =>
      props.subSubMenu && props.subSubMenu.length > 0 
        ? `none`
        : "none"};
      /* background-image: url(/images/icon/arrow.svg); */
  }
  .menuLink a{
    line-height:54px;
  }
  .menuLink li::after{
    top:20px;
  }
  .subsubmenu2 {
    display: flex;
    flex-wrap: wrap;
    gap: 0px 10px;
    padding-left: 0px;
    li {
      width: 46%;
      position: relative;
      padding: 4px 0px;
      a {
        display: block;
        line-height: 22px;
        padding-left: 30px;
        line-height: 22px;
        font-size:16px;
        :hover{
          text-decoration:underline;
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .menuLink li::after{
      top: 13px;
    background-size: 12px;
    }
    .subsubmenu2 li {
    width: 100%;}
    .manuTabTitle {
    padding-right: 0px;
}
.subSubMenuDiv {
    min-height: auto;
}
}
`;
