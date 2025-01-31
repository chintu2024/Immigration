import React, { useEffect } from 'react'
import Link from "next/link";
import SubCategory from './SubCategory';
interface Props  {
    activeIndex? :any;
    activeSubIndex?: any;
    setActiveIndex? : any;
    setActiveSubIndex?: any;
    category?: any
    productName?:any;
}

const MainCategory = (props: Props) => {
    const { activeIndex, activeSubIndex, setActiveIndex, setActiveSubIndex ,category,productName } = props;
    // console.log("category",category)
    useEffect(() => {
      if (category && productName) {
        const matchedIndex = category.data.findIndex((item: any) => item.name === productName);
        if (matchedIndex !== -1) {
          setActiveIndex(matchedIndex);
        }
      }
    }, [category, productName, setActiveIndex]);
  return (
    <ul className="catUl">
      {category?.data.map((item:any, index: any) => (
        <li className="catli" key={index}>
          <div className="catagery">
          <Link href={`../${item.slug}`}>{item.name}</Link>
          <p className="menuBtn" onClick={() => {setActiveIndex(index === activeIndex ? null : index); setActiveSubIndex(null);}}>
            
            {activeIndex === index ? <img src="images/pageArrow.png" alt="images" width="32px"/> : <img src="images/chevrons-chevron-down.png" alt="images" width="32px"/>}
          </p>
          </div>
         <SubCategory activeIndex={activeIndex} activeSubIndex={activeSubIndex} setActiveIndex={setActiveIndex} setActiveSubIndex={setActiveSubIndex} index={index} cat_id={item.id}/>
        </li>
      ))}
    </ul>
  )
}

export default MainCategory