import React, { useEffect, useState } from "react";
import BlogList from "src/BlogList";
import LayOut from "src/Common/Layout";
import BlogPageSkeleton from "src/Common/SkeletonScreen/blogPageSkeleton";

interface Props {}

const blogIndex = (props: Props) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blogs`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await res.json();

        setBlog(fetchedData);
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
      ) : blog ? (
        <BlogList blog={blog} />
      ) : (
        <p>No data available</p>
      )}
    </LayOut>
  );
};

export default blogIndex;
