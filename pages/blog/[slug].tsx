import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogDetailsPage from "src/BlogDetailsPage";
import LayOut from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";

interface Props {
  id?: any;
}
const BlogDetails = (props: Props) => {
  const router = useRouter();
  const pathId = router;
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const urlParts = router.asPath.split("-");
  const extractedId = urlParts[urlParts.length - 1];
    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blogs`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const item = await res.json();
        const fetchedData = await item.response.find(
          (item: any) => item._id === extractedId
        );

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [extractedId]);

  return (
    <LayOut>
      {loading ? (
        <BlogDetailsPageSkeleton/>
      ) : data ? (
        <BlogDetailsPage data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </LayOut>
  );
};

export default BlogDetails;
