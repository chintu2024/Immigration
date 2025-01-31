import React from 'react'
import styled from 'styled-components'
import Images from '../Images'
import Typography from '../Typography'
import Link from 'next/link'

interface Props  {}

const Error404 = (props: Props) => {
  return (
    <Error404Style>
       <div className="container">
        <div className="row">
            <div className="col-md-5 text-center mt-5 mx-auto">
            <Images src={"/images/error.svg"} alt={'404 images'} width={357} height={346} ></Images>
            <Typography
              as="h2"
              _color="#000"
              _fontSize={["18px", "57px"]}
              _fontWeight={[400, 800]}
              _lineHeight={["36px", "40px"]}
              className="mb-4"
            >
             Uh-Oh...
            </Typography>
            <Typography
              as="h2"
              _color="#000"
              _fontSize={["18px", "18px"]}
              _fontWeight={[400, 400]}
              _lineHeight={["24px", "28px"]}
              className=""
            >
             The page you are looking for may have been moved, deleted,
             or possibly never existed.
            </Typography>
            <div className="goBtn">
            <Link href="/">Go Back</Link>
            </div>
            </div>
        </div>
       </div>
    </Error404Style>
  )
}

export default Error404

export const Error404Style = styled.section`
.goBtn{
    max-width: 167px;
    margin: auto;
    background-color: #000;
    margin-top: 20px;
    margin-bottom: 20px;
    a{
        display: block;
        color: #fff;
        padding: 17px 0px;
    }
}`;