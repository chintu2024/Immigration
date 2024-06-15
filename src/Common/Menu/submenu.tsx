import React, { useEffect, useState } from 'react';
import SubSubmenu from './SubSubmenu';

interface Props {
  id?: any;
}

const Submenu = (props: Props) => {
  const categoryId = props.id;
  const [data, setData] = useState();
  // const [data, setData] = useState(() => {
    
  //   const cachedData = localStorage.getItem(`subMenu_${categoryId}`);
  //   return cachedData ? JSON.parse(cachedData) : null;
  // });
  const subMenu: any = data;
  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        // Data already loaded from localStorage
        return;
      }

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
  }, [categoryId, data]);

  return (
    <>
      {subMenu && subMenu.response && subMenu.response.length > 0 && (
        <div className="mega-box">
          <div className="content">
            {subMenu.response.slice(0, 3).reverse().map((item: any, index: any) => (
              <div className="col-md-3" key={index}>
                <header>{item.sub_category}</header>
                <SubSubmenu sub_category={item._id}/> 
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Submenu;
