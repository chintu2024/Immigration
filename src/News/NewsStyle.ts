import styled from "styled-components";

const NewsStyle = styled.section`

    background: #FFFBF2;
    .maintitle2 a{
        color: #1A0DAB;
        :hover{
            text-decoration: underline;
        }
    }
    .catdis{
        -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
    line-height: 28px;
    }
.NewsLeft{
    padding-left: 60px;
}
.newlist{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 1px solid #BABABA;
    flex-wrap: wrap;
}
.newsTextSec{
    width: 84%;
}
.newsimages{
    width: 14%;
}
.listCar {
    white-space: nowrap;
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        gap: 10px;
        overflow-x: auto !important;
    scrollbar-color:#fffbf2 !important;
    margin: 10px 0px;
    padding-bottom: 10px;
  }
  .listCar::-webkit-scrollbar {
    width: 30px;
    height: 12px;
    background-color: #fffbf2;
  }
  .listcat {
    border-radius: 25px;
    padding: 3px 8px;
    font-size: 12px;
    color: #000;
  }
  .listCar::-webkit-scrollbar-thumb {
  background: #fffbf2; 
  border: none;
}
.listCar::-webkit-scrollbar-track {
  background: #fffbf2; 
}
.NewsThem{
    object-fit: cover;
    border-radius: 8px;
}
`;


export default NewsStyle;