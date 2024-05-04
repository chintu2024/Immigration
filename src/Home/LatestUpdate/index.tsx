import React from 'react'
import LatestUpdateStyle from './latestUpdateStyle';
import Typography from 'src/Common/Typography';
import Images from 'src/Common/Images';
import BigNews from './BigNews';
import NewsList from './NewsList';

interface Props {}

const LatestUpdateIndex = (props: Props) => {
  return (
   <LatestUpdateStyle>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <Typography
                as="p"
                _color="#000"
                _fontSize={["14px", "32px"]}
                _fontWeight={[600, 600]}
                _lineHeight={["14px", "24px"]}
                className="my-2"
              >Latest Update <Images src={"images/arrows-arrow-up-right.svg"} alt={'logo Arrow'}></Images>
              </Typography>
              <Typography
                as="p"
                _color="#000"
                _fontSize={["14px", "16px"]}
                _fontWeight={[400, 400]}
                _lineHeight={["14px", "24px"]}
                className="my-3"
              >Stay updated with the latest Canadian Immigration updates and blog posts.
              </Typography>
            </div>
            <div className="col-md-6">
                <BigNews/>
            </div>
            <div className="col-md-6">
                <NewsList/>
            </div>
        </div>
    </div>
   </LatestUpdateStyle>
  )
}

export default LatestUpdateIndex;