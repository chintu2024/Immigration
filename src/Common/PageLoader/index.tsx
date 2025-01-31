import React from 'react'
import styled from 'styled-components';

type Props = {}

function PageLoader({}: Props) {
  return (
      <Loader>
    Loading more items...
    </Loader>
  )
}

export default PageLoader

export const Loader = styled.div`
color: #fff;
    text-align: center;
    font-size: 20px;
    margin: 50px auto;
    background-color: #fe0002;
    max-width: 300px;
    padding: 10px 0px;
    border-radius: 10px;
`;