import React, { useEffect, useState } from 'react'
import LayOut from 'src/Common/Layout';
import HomePageSkeleton from 'src/Common/SkeletonScreen/homePageSkeleton';
import TestimonalsIndex from 'src/Testimonials';

interface Props  {}

const Testimonials = (props: Props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/client`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const fetchedData = await res.json();
  
          setData(fetchedData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Set loading to false regardless of success or failure
        }
      };
  
      fetchData();
    }, []);
  return (
   <LayOut>
     {loading ? (
       <HomePageSkeleton/>
      ) : data ? (
        <TestimonalsIndex data={data}/>
      ) : (
        <p>No data available</p>
      )}
   </LayOut>
  )
}
export default Testimonials;