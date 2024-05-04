import styled from "styled-components";
import theme from "styles/themeColor";

const StyleCourseCard = styled.div`
    position: relative;
    height: 100%;
  .card{
      margin-top: 30px;
      border-radius: 32px;
      overflow: hidden;
      position: relative;
    height: 100%;
    border: 1px solid #CBD5E0;
    padding-bottom: 32px;
    transition: all .3s ease-in-out;
      .cardText{
        /* border: 1px solid #CBD5E0; */
        border-radius: 0px 0px 32px 32px;
        margin-top: -3px;
        padding: 15px 20px;
      }
      .cardTtile{
          text-transform: uppercase;
          transition: all .3s ease-in-out;  
      }
      .pageList{
          margin: 0px;
          padding-left:0px;
          list-style: none;
          li{
              padding: 10px 0px;
              border-bottom: 1px solid #CBD5E0;
              font-size: 16px;
              position: relative;
              padding-left: 15px;
              line-height: 26px;
              transition: all .3s ease-in-out;
              ::before{
                  background: url(images/card-arrow.svg) no-repeat;
                  content: "";
                  width: 16px;
                  height: 16px;
                  position: absolute;
                  top: 18px;
                  left: 0px;
                  transition: all .3s ease-in-out;
              }
              a{
                  color: ${theme.colors.submenu};
                  font-size: 18px;
                  font-weight: 600;
                  transition: all .3s ease-in-out;
              }
          }
      }
      .applyBtn{
          max-width: 200px;
          position: absolute;
          bottom: 22px;
          width: 100%;
          transition: all .3s ease-in-out;
          a{
              border: 1px solid ${theme.colors.brand_primary.main};
              border-radius: 25px;
                border-radius: 25px;
                display: block;
                padding: 13px 0px 13px 20px;
                color: ${theme.colors.brand_primary.main};
                background: url(images/arrow.svg) no-repeat;
                background-position: 170px 17px;
                transition: all .3s ease-in-out;
          }
      }
      :hover{
        background-color: ${theme.colors.brand_primary.main};
        p{
            color: #fff;
        }
        li{
            border-bottom: 1px solid #fff;
            a{
            color: #fff;
        }
        }
        .pageList li::before{
            background: url(images/card-arrow-white.svg) no-repeat;
        }
        .applyBtn {
            a{
            border: 1px solid #fff;
            background: url(images/arrow-white.svg) no-repeat !important;
            background-position: 170px 17px !important;
        }
        }
        a{
            color: #fff;
        }
      }
  }
  @media screen and (max-width: 760px) {
  .card .pageList li a {
    line-height:28px;
    font-size: 16px;
  }
}
`;

export default StyleCourseCard