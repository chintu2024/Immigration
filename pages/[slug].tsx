import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "src/Common/Layout";
import BlogDetailsPageSkeleton from "src/Common/SkeletonScreen/blogDetailsPageSkeleton";
import ProductDetails from "src/Product";

interface Props {}

const ProductDetailsIndex = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const urlParts = router.asPath.split("-");
  const text = urlParts.slice(1, -1).join(" ");
  // const text2 = urlParts.slice(0, 1).join(" ");
  const basecategory = text.replace("/","")
  console.log("category", basecategory)
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
          (item: any) => item._id === "664ce6c6aff639d654b18a13"
        );
        console.log("data",fetchedData)

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [basecategory]);
  return (
    <Layout>
      {loading ? (
        <BlogDetailsPageSkeleton />
      ) : data ? (
        <ProductDetails data={data} />
      ) : (
        <p>data has not loaded</p>
      )}
  </Layout>
  )
};

export default ProductDetailsIndex;
