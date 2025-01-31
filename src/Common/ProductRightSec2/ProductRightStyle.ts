import styled from "styled-components";

const ProductRightStyle = styled.div`
margin-left: 60px;
position: relative;
    height: 100%;
.submitBtn{
  background-color: #000;
  border: none;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
}
.sideMenu{
  border: 1px solid #C0C0C0;
    background-color: #F4F2F2;
    border-radius: 8px;
    padding: 10px 27px;
    margin-bottom: 20px;
    .catUl{
      padding-left: 0px;
      list-style: none;
    }
    .catsubUl{
        padding-left: 20px;
      }
      }
    .catli{
      padding-left: 0px;
      /* border-bottom: 1px solid #C0C0C0; */
      margin-bottom: 6px;
      line-height: 28px;
      :last-child .catagery{
        border: none;
      }
    }
    .catagery{
      /* padding-top: 10px; */
      padding-bottom: 10px;
      display: flex;
      border-bottom: 1px solid #C0C0C0;
      justify-content: space-between;
      align-items: center;
      a{
        font-family: Open Sans;
        font-size: 16px;
        font-weight: 600;
        line-height: 21.79px;
        color: #000;
      }
    }
    .catsubSubUl{
      .catagery{
        padding-left: 30px;
        position: relative;
        justify-content: flex-start;
        display: block;
        ::before{
          content: "";
          background-image: url(/images/card-arrow.svg);
          width: 30px;
          height: 30px;
          background-repeat: no-repeat;
          background-size: 15px;
          left: 0px;
          position: absolute;
          top: 14px;
        }
      }
        a{
          color: #344799;
          font-weight: 500;
          
        }
    .menuBtn{
      cursor:pointer;
    }
}


  .keyWord {
    border: 1px solid #ececec;
    padding: 25px;
  }
  .keywordName {
    list-style: none;
    padding-left: 0px;
    li {
      /* background-color: #f5f8fa; */
      color: #6e7682;
      padding: 8px 0px;
      /* display: inline-block; */
      /* margin: 5px 8px 7px 0px; */
      /* border-radius: 25px; */
      font-weight: 400;
      position: relative;
      padding-left: 25px;
      border-bottom: 1px solid #C0C0C0;
      

      ::before{
        content: "";
        position: absolute;
        background-image: url(/images/icon/small-arrow.svg);
        background-size: 20px;
        height: 20px;
        width: 20px;
        top: 10px;
        left: 0px;
      }
      a{
        font-size: 16px;
      }
    }
  }
  .keyWorkSec{
    border: 1px solid #ECECEC;
    margin-top: 20px;
    border-radius: 4px;
    background: #FFEEEE;
    padding: 30px 15px;
  } 
  .keyWorkSec ul{
    margin: 0px;
    a{
      :hover{
        text-decoration: underline;
      }
    }
  }
  .keyWorkSec
  .calender {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .recentPost {
    position: relative;
    padding-left: 30px;
    border-bottom: 1px solid #ececec;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .recentPost:last-child {
    border: none;
  }
  .recentPost::before {
    content: "";
    position: absolute;
    background: url(/images/Chevrons-chevron-right.png) no-repeat;
    width: 24px;
    height: 24px;
    left: 0px;
  }
  .sticSec{
    border-radius: 4px;
    position: sticky;
    top: 85px;
    z-index: 10;
    background-color: #fff;
  }
  .workForm {
    border: 1px solid #B82115;
    padding: 25px;
    border-radius: 4px;
  }
  .productTxt {
    margin-left: auto;
    max-width: 329px;
  }
`;

export default ProductRightStyle;
