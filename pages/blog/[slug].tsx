import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogDetailsPage from "src/BlogDetailsPage";
import Error404 from "src/Common/404";
import LayOut from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";

interface Props {}

const BlogDetails = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract slug from router asPath
  const slugset = router.query.slug as string;
  const slug = slugset ? slugset.toLowerCase().replace(/\s+/g, " ").split("-").join(" ") : "";
// console.log("slug", router.query.slug as string)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on new request
      if (!slug) return; // Prevent fetching if slug is not defined

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/blogs`
        );
        if (!res.ok) {
          const errorMessage = await res.text(); // Get detailed error message
          throw new Error(`Failed to fetch: ${errorMessage}`);
        }

        const response = await res.json();
        const fetchedData = response.data?.find((item: any) => {
          return item.slug.toLowerCase().replace(/\s+/g, " ").split("-").join(" ") === slug;
        });

        if (!fetchedData) {
          throw new Error("Blog post not found.");
        }

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("error"); // Store the error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <LayOut>
        <BlogDetailsPageSkeleton />
      </LayOut>
    );
  }

  if (error) {
    return (
      <LayOut>
        <Error404 /> {/* You can customize the error message as needed */}
      </LayOut>
    );
  }

  return (
    <LayOut>
      <BlogDetailsPage data={data} />
    </LayOut>
  );
};

export default BlogDetails;
