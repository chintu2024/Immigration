import React from "react";
import Skeleton from "./Skeleton";

interface Props {}

const HomePageSkeleton = (props: Props) => {
  return (
    <section>
      <Skeleton sHeight={"643px"} className={"homeSk"}></Skeleton>
      <div className="container">
        <div className="row my-5">
            <div className="col-md-6">
            <Skeleton sHeight={"643px"} className={"homeSk"}></Skeleton>
            </div>
            <div className="col-md-6">
            <Skeleton sHeight={"643px"} className={"homeSk"}></Skeleton>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-md-12">
            <Skeleton sHeight={"643px"} className={"homeSk"}></Skeleton>
            </div>
        </div>
      </div>
      <Skeleton sHeight={"643px"} className={"homeSk mb-5"}></Skeleton>
    </section>
  );
};

export default HomePageSkeleton;
