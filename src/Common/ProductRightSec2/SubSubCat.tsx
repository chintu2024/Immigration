import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
    activeIndex? :any;
    activeSubIndex?: any;
    setActiveIndex? : any;
    setActiveSubIndex?: any;
    subIndex?: any;
    subCat?: any ;
}

const SubSubCat = (props: Props) => {
    const [subSubCategory, setSubSubCategory] = useState(null);
    const subSubCategoryData:any = subSubCategory
    const { activeIndex, activeSubIndex, setActiveIndex, setActiveSubIndex, subIndex,subCat } = props;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/sub-sub-category/${subCat}`
            );
            if (!res.ok) {
              throw new Error("Failed to fetch data");
            }
            const fetchedData = await res.json();
            setSubSubCategory(fetchedData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, [subCat]); // Empty dependency array means this will only run once on mount
  return (
    <>
      {activeSubIndex === subIndex && (
        <ul className="catUl catsubSubUl">
          {subSubCategoryData?.data.map((item: any, subSubIndex: any) => (
            <li className="catli" key={subSubIndex}>
              <div className="catagery">
                {/* <Link href={`../${item.name.toLowerCase().replace(/\s+/g, "-")}`}>{item.name}</Link> */}
                <Link href={`../${item.slug}`}>{item.name}</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SubSubCat;
function setSubCategory(fetchedData: any) {
    throw new Error("Function not implemented.");
}

