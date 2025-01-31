import React, { useEffect, useState } from 'react'
import Error404 from 'src/Common/404';
import LayOut from 'src/Common/Layout'
import BlogPageSkeleton from 'src/Common/SkeletonScreen/blogPageSkeleton';
import NewsIndexPage from 'src/News'

interface Props  {}

const NewIndex = (props: Props) => {
    const [News, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/news`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();

        setNews(fetchedData);
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
        <BlogPageSkeleton/>
      ) : News ? (
        <NewsIndexPage newsData={News} />
      ) : (
        <Error404/>
      )}
    </LayOut>
  )
}

export default NewIndex