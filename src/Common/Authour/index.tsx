import React from 'react';
import styled from 'styled-components';
import Images from '../Images';
import Typography from '../Typography';

interface Props {
  author?: any;
}

// Function to format the date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options:any = { day: '2-digit', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const Authour = (props: Props) => {
  return (
    <AuthourStyle>
      <div className="authourdiv">
        <Images src={
                        props.author.authorname.image
                          ? `${process.env.NEXT_PUBLIC_Images_URL}/public/images/${props.author.authorname.image}`
                          : "/images/elaar.jpg"
                      } alt={'images'} width={48} height={48} className="authImages" />
        <div>
          <Typography
            as="h4"
            _color="#000"
            _fontSize={["14px", "22px"]}
            _fontWeight={[600, 600]}
            _lineHeight={["14px", "33px"]}
            className=""
          >
            {props.author.authorname.name}
          </Typography>
          <Typography
            as="p"
            _color="#acacb1"
            _fontSize={["14px", "16px"]}
            _fontWeight={[400, 400]}
            _lineHeight={["14px", "20px"]}
            className=""
          >
            Published: <span className="data">{formatDate(props.author.publish_date)}</span>
          </Typography>
        </div>
      </div>
    </AuthourStyle>
  );
};

export default Authour;

export const AuthourStyle = styled.div`
  .authourdiv {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .authImages {
    border-radius: 50%;
  }
  .data {
    color: #000;
  }
`;
