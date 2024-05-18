import React, { useEffect, useState } from "react";
import LatestUpdateStyle from "./latestUpdateStyle";
import Typography from "src/Common/Typography";
import Images from "src/Common/Images";
import BigNews from "./BigNews";
import NewsList from "./NewsList";

interface Props {}

const LatestUpdateIndex = (props: Props) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dashboard.elaarimmigration.in/api/blogs`
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
    <LatestUpdateStyle>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Typography
              as="p"
              _color="#000"
              _fontSize={["14px", "32px"]}
              _fontWeight={[600, 600]}
              _lineHeight={["14px", "24px"]}
              className="my-2"
            >
              Latest Update
              <Images
                src={"images/arrows-arrow-up-right.svg"}
                alt={"logo Arrow"}
              ></Images>
            </Typography>
            <Typography
              as="p"
              _color="#000"
              _fontSize={["14px", "16px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["14px", "24px"]}
              className="my-3"
            >
              Stay updated with the latest Canadian Immigration updates and blog
              posts.
            </Typography>
          </div>
          <div className="col-md-6">
            {loading ? (
              <p>Loading...</p>
            ) : blog ? (
              <BigNews blog={blog} />
            ) : (
              <p>No data available</p>
            )}
          </div>
          <div className="col-md-6">
            {loading ? (
              <p>Loading...</p>
            ) : blog ? (
              <NewsList blog={blog} />
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </LatestUpdateStyle>
  );
};

export default LatestUpdateIndex;
