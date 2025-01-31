import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Error404 from "src/Common/404";
import LayOut from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";
import NewsDetailsPages from "src/NewsDetails";

interface Props {}

const NewsDetails = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const shareUrl = `http://elaarimmigration.in${router.asPath}`
  // Extract slug from router asPath
  const slugset = router.query.slug as string;
  const slug = slugset ? slugset.toLowerCase().replace(/\s+/g, " ").split("-").join(" ") : "";
// console.log("data", data)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on new request
      if (!slug) return; // Prevent fetching if slug is not defined

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/news/${slugset}`
        );
        if (!res.ok) {
          const errorMessage = await res.text(); // Get detailed error message
          throw new Error(`Failed to fetch: ${errorMessage}`);
        }

        const response = await res.json();
        // const fetchedData = response.data?.find((item: any) => {
        //   return item.seourl.toLowerCase().replace(/\s+/g, " ").split("-").join(" ") === slug;
        // });

        if (!response) {
          throw new Error("news post not found.");
        }

        setData(response);
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
  const newsData = data?.data;
  return (
    <LayOut>
      <NewsDetailsPages data={newsData} shareUrl={shareUrl}/>
    </LayOut>
  );
};

export default NewsDetails;
