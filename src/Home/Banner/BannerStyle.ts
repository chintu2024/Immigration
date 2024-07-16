import styled from "styled-components";

const BannerStyle = styled.div`
  .bannerImages {
    object-fit: cover;
    position: absolute;
    top: 0px;
    z-index: -9;
    border-radius: 0px 0px 62px 62px;
  }
  .slick-list {
    border-radius: 0px 0px 62px 62px;
  }
  .bannerBg {
    position: relative;
    padding: 147px 0px;
    border-radius: 0px 0px 62px 62px;
    .title {
      position: relative;
      .logoImages {
        position: absolute;
        bottom: 0px;
        left: 0px;
      }
    }
    .BookingBtn {
      border: 2px solid #ffffff;
      width: 240px;
      height: 60px;
      margin-top: 30px;
      :hover {
        background-color: #242424;
      }
      p {
        color: #fff;
        display: flex;
        text-align: center;
        position: relative;
        height: 100%;
        place-content: center;
        align-items: center;
      }
    }
  }
  .slick-dots {
    z-index: 10000;
    bottom: 36px;
    left: 24px;
  }
`;
export default BannerStyle;
