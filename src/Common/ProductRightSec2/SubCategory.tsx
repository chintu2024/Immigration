import React, { useEffect, useState } from 'react'
import Link from "next/link";
import index from 'src/Home/ImmigrationCompany';
import SubSubCat from './SubSubCat';

interface Props  {
    activeIndex? :any;
    activeSubIndex?: any;
    setActiveIndex? : any;
    setActiveSubIndex?: any;
    index?: any;
    cat_id?: any
}

const SubCategory = (props: Props) => {
    const [subCategory, setSubCategory] = useState(null);
    const subCategoryData:any = subCategory
    const { activeIndex, activeSubIndex, setActiveIndex, setActiveSubIndex, index,cat_id } = props;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/sub-category/${cat_id}`
            );
            if (!res.ok) {
              throw new Error("Failed to fetch data");
            }
            const fetchedData = await res.json();
            setSubCategory(fetchedData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, [cat_id]); // Empty dependency array means this will only run once on mount
  return (
    <>
     {activeIndex === index && (
            <ul className="catUl catsubUl">
              {subCategoryData?.data.map((item:any, subIndex: any) => (
                <li className="catli" key={subIndex}>
                  <div className="catagery">
                  <Link href={`../${item.slug}`}>{item.name}</Link>
                  <p
                    onClick={() =>
                      setActiveSubIndex(subIndex === activeSubIndex ? null : subIndex)
                    }
                  >
                    {activeSubIndex === index ? <img src="images/pageArrow.png" alt="images" width="28px"/> : <img src="images/chevrons-chevron-down.png" alt="images" width="28px"/>}
                  </p>
                  </div>
                  <SubSubCat activeIndex={activeIndex} activeSubIndex={activeSubIndex} setActiveIndex={setActiveIndex} setActiveSubIndex={setActiveSubIndex} subIndex={subIndex} subCat={item.id}/>
                </li>
              ))}
            </ul>
          )}
    </>
  )
}

export default SubCategory