import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  sub_category?: any;
  setmenutoggale?: any;
  setsubSubMenu?:any;
}

const SubSubmenu2 = (props: Props) => {
  const sub_category = props.sub_category;
  const [subdata, setSubdata] = useState<any>();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/sub-sub-category/${sub_category}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();
        setSubdata(fetchedData);
        // Ensure setsubSubMenu gets called with correct data
        if (fetchedData && fetchedData.data && fetchedData.data.length > 0) {
          props.setsubSubMenu && props.setsubSubMenu(fetchedData.data); // Pass fetched data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sub_category]);

  const sub_Category = subdata;

  return (
    <>
      {sub_Category &&
        sub_Category.data &&
        sub_Category.data.length > 0 && (
          <div className="subSubMenuDiv">
            <ul className="mega-links subsubmenu2">
              {sub_Category.data.map((item: any, index: any) => (
                <li key={index} onClick={() => props.setmenutoggale(true)}>
                  <Link href={`../${item.slug}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};

export default SubSubmenu2;
