import React, { useEffect, useState } from 'react';
import SubSubmenu from './SubSubmenu';
import Typography from '../Typography';
import { menuData } from './menuData';
import Link from 'next/link';

interface Props {
  id?: any;
  index?:any;
  setmenutoggale?:any;
  menutoggale?:any;
}

const Submenu = (props: Props) => {
  const showMegaBack = [
    "back1", "back2", "back3", "back4", "back5"
  ];
  const categoryId = props.id;
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
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/sub_category/${categoryId}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await res.json();
        // localStorage.setItem(`subMenu_${categoryId}`, JSON.stringify(fetchedData));
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // [categoryId, data]
  return (
    <>
      {subMenu && subMenu.response && subMenu.response.length > 0 && (
        <div className={props.menutoggale === true ? "mega-box menuHide" : "mega-box"}>
          <div className={`content ${showMegaBack[props.index]}`} >
            <div className="col-md-3">
            {props.index === 0 && <div className="menutitle"><Typography
              as="h2"
              _color="#000"
              _fontSize={["18px", "32px"]}
              _fontWeight={[500, 500]}
              _lineHeight={["24px", "40px"]}
              className=""
            >
              Making immigration easier, step by step
            </Typography></div>}
            {props.index === 1 && <div className="menutitle"><Typography
              as="h2"
              _color="#000"
              _fontSize={["18px", "32px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["24px", "40px"]}
              className=""
            >
              Elevate Your Career with the Canadian Work Permit
            </Typography></div>}
            { 1 < props.index && <div className="menutitle"><Typography
              as="h2"
              _color="#000"
              _fontSize={["18px", "32px"]}
              _fontWeight={[500, 500]}
              _lineHeight={["24px", "40px"]}
              className=""
            >
              Making immigration easier, step by step
            </Typography></div>}
            </div>
            {subMenu.response.slice(0, 2).reverse().map((item: any, index: any) => (
              <div className="col-md-3" key={index}>
                <header onClick={() => props.setmenutoggale(true)}><Link href={item.sub_category.toLowerCase()
              .replace(/\s+/g, "-")}>{item.sub_category}</Link></header>
                <SubSubmenu sub_category={item._id} setmenutoggale={props.setmenutoggale}/> 
              </div>
            ))}
            <div className="col-md-3">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Submenu;
