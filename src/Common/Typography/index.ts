import styled from "styled-components";

interface TypographyProps {
  _color?: string;
  _fontSize: string[];
  _fontWeight: number[];
  _lineHeight?: string[];
  _letterspacing?: string[];
}

const Typography = styled.span<TypographyProps>`
  color: ${(props) => props._color};
  font-size: ${(props) => props._fontSize[0]};
  font-weight: ${(props) => props._fontWeight[0]};
  line-height: ${(props) => (props._lineHeight ? props._lineHeight[0] : "normal")};
  letter-spacing: ${(props) => (props._letterspacing ? props._letterspacing[0]: "0px")};

  @media screen and (min-width: 991px) {
    color: ${(props) => props._color};
    font-size: ${(props) => props._fontSize[1]};
    font-weight: ${(props) => props._fontWeight[1]};
    line-height: ${(props) => (props._lineHeight ? props._lineHeight[1] : "normal")};
  letter-spacing: ${(props) => (props._letterspacing ? props._letterspacing[1]: "0px")};

  }
`;

export default Typography;
