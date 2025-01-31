import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Error404 from "src/Common/404";
import LayOut from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";
import NewscartPages from "src/News/NewscartPages";

interface Props {}

const NewsDetails = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract slug from router asPath
  const slugset = router.query.slug as string;
  const slug = slugset ? slugset.replace(/\s+/g, " ").split("-").join(" ") : "";
// console.log("slug", slug)
// console.log("data", data)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on new request
      if (!slug) return; // Prevent fetching if slug is not defined

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/news-cat-wise/${slug}`
        );
        if (!res.ok) {
          const errorMessage = await res.text(); // Get detailed error message
          throw new Error(`Failed to fetch: ${errorMessage}`);
        }

        const fetchedData = await res.json();
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
      <NewscartPages data={data} slug={slug}/>
    </LayOut>
  );
};

export default NewsDetails;
