import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogDetailsPage from "src/BlogDetailsPage";
import Error404 from "src/Common/404";
import LayOut from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";

interface Props {
  id?: any;
  slug? :any;
}
const BlogDetails = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const extracted = router.asPath.split("-").join(" ");
  const slugurl = extracted.split("/")
  const slug = slugurl.slice(2).join(" ")
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
          (item: any) => item.slug.toLowerCase() === slug
        );
        console.log(fetchedData)

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [slug]);

  return (
    <LayOut>
      {loading ? (
        <BlogDetailsPageSkeleton />
      ) : data ? (
        <BlogDetailsPage data={data} />
      ) : (
        <Error404/>
      )}
    </LayOut>
  );
};

export default BlogDetails;
