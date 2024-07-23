import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Error404 from "src/Common/404";
import Layout from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";
import ProductDetails from "src/Product";

interface Props {}

const ProductDetailsIndex = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const extracted = router.asPath.split("-").join(" ");
  const slugurl = extracted.split("/")
  const slug = slugurl.slice(1).join("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/product_all`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const item = await res.json();
        const fetchedData = await item.response.find(
          (item: any) => item.name.toLowerCase() === slug
        );

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
    <Layout>
      {loading ? (
        <BlogDetailsPageSkeleton />
      ) : data ? (
        <ProductDetails data={data} />
      ) : (
        <Error404/>
        // <BlogDetailsPageSkeleton />
      )}
  </Layout>
  )
};

export default ProductDetailsIndex;
