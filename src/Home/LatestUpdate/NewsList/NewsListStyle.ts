import styled from "styled-components";

const NewsListStyle = styled.div`
  .newsList {
    display: flex;
    border-bottom: 1px solid #cbc8c8;
    margin-bottom: 20px;
    padding-bottom: 20px;
    gap: 64px;
    img {
      border-radius: 16px 16px 16px 16px;
      /* padding-right: 23px; */
      object-fit: cover;
    }
  }
`;

export default NewsListStyle;
