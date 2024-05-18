import React from 'react'
import Skeleton from './Skeleton'

type Props = {}

const BlogPageSkeleton = (props: Props) => {
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
        </div>
    </section>
  )
}

export default BlogPageSkeleton