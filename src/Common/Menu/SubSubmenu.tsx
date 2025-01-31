import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
    sub_category?: any;
    setmenutoggale?:any;
}

const SubSubmenu = (props: Props) => {
    const sub_category = props.sub_category;
    const [subdata, setSubdata] = useState();
    const sub_Category:any= subdata;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/sub-sub-category/${sub_category}`
            );
            if (!res.ok) {
              throw new Error('Failed to fetch data');
            }
            const fetchedData = await res.json();
            setSubdata(fetchedData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      [sub_category,subdata ]
  return (
    <>
    {sub_Category && sub_Category.data && sub_Category.data.length > 0 && <ul className="mega-links">
    {sub_Category.data.slice(0, 4).reverse().map((item: any, index: any) => (
              <li key={index} onClick={() => props.setmenutoggale(true)}>
              <Link href={`../${item.name.toLowerCase()
              .replace(/\s+/g, "-")}`}>{item.name}</Link>
            </li>
            ))}
    </ul>}
    </>
  );
};
export default SubSubmenu;
