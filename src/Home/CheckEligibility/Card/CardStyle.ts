import styled from "styled-components";

const CardStyle = styled.div`
.cardDiv{
    background-color: #FFFFFF;
    margin-bottom: 20px;
    padding: 40px 20px;
    border-radius: 22px;
    text-align: center;
}
.checkText{
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
}
.checkBtn{
    margin-top: 20px;
    a{
        font-size: 16px;
        font-weight: 500;
        :hover{
            opacity: 0.9;
        }
    }
}
`;

export default CardStyle;