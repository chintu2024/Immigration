import styled from "styled-components";

const BannerStyle = styled.div`
.bannerBg{
  background-image: url(images/banner1.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0px;
  border-radius: 0px 0px 62px 62px;
  .title {
    position: relative;
    .logoImages {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
  }
  .BookingBtn{
    border: 2px solid #FFFFFF;
    width: 240px;
    height: 60px;
    margin-top: 30px;
    :hover{
        background-color: #242424;
    }
    a{
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
