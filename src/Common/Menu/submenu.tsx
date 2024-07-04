import React, { useEffect, useState } from 'react';
import SubSubmenu from './SubSubmenu';
import Typography from '../Typography';
import { menuData } from './menuData';

interface Props {
  id?: any;
  index?:any;
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
        <div className="mega-box">
          <div className={`content ${showMegaBack[props.index]}`} >
            <div className="col-md-3">
            {props.index === 0 && <Typography
              as="h2"
              _color="#000"
              _fontSize={["24px", "32px"]}
              _fontWeight={[500, 500]}
              _lineHeight={["36px", "40px"]}
              className=""
            >
              Making immigration easier, step by step
            </Typography>}
            {props.index === 1 && <Typography
              as="h2"
              _color="#000"
              _fontSize={["24px", "32px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["36px", "40px"]}
              className=""
            >
              Elevate Your Career with the Canadian Work Permit
            </Typography>}
            { 1 < props.index && <Typography
              as="h2"
              _color="#000"
              _fontSize={["24px", "32px"]}
              _fontWeight={[500, 500]}
              _lineHeight={["36px", "40px"]}
              className=""
            >
              Making immigration easier, step by step
            </Typography>}
            </div>
            {subMenu.response.slice(0, 2).reverse().map((item: any, index: any) => (
              <div className="col-md-3" key={index}>
                <header>{item.sub_category}</header>
                <SubSubmenu sub_category={item._id}/> 
              </div>
            ))}
            <div className="col-md-3">
              <ul className="menuLink">
                <li>
                  <a href="testimonials"><img src="/images/icon/message-square.svg" alt="" width="24px" height="24px"/> Customer Stories</a>
                </li>
                <li>
                  <a href="about-us"><img src="/images/icon/notifications-alert-circle.svg" alt="" width="24px" height="24px"/> Why Trust Ellar</a>
                </li>
                <li>
                  <a href="contact-us"><img src="/images/icon/minus.svg" alt="" width="24px" height="24px"/> Let’s talk</a>
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
