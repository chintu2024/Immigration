import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Error404 from "src/Common/404";
import Layout from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";
import ProductDetails from "src/Product";

interface Props {}

const ProductDetailsIndex = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Change to string for specific error messages

  const slug = router.query.slug as string; // Get slug directly from the router query
  // console.log("slug",slug)

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on new request
      if (!slug) return; // Prevent fetching if slug is not defined

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/product/${slug}`
        );
        if (!res.ok) {
          const errorMessage = await res.text(); // Get detailed error message
          throw new Error(`Failed to fetch: ${errorMessage}`);
        }
        const item = await res.json();
        if (!item.data) {
          throw new Error("Product not found."); // Handle case where product is not found
        }
        setData(item);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("error"); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <BlogDetailsPageSkeleton />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Error404  /> {/* Pass the error message to Error404 */}
      </Layout>
    );
  }

  const productdata = data?.data;

  return (
    <Layout>
      <ProductDetails data={productdata} />
    </Layout>
  );
};

export default ProductDetailsIndex;
