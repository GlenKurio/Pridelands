import styled, { css } from "styled-components";

const sizes = {
  p: css`
    font-size: var(--fs-p);
    font-weight: 400;
    line-height: 1.7;
  `,
  psm: css`
    font-size: var(--fs-psm);
    font-weight: 400;
    line-height: 1.7;
  `,
  pxs: css`
    font-size: var(--fs-p);
    font-weight: 400;
    line-height: 1.7;
  `,
};

const Paragraph = styled.p`
  ${(props) => sizes[props.size]}
`;
Paragraph.defaultProps = {
  size: "p",
};

export default Paragraph;
