import styled, { css } from "styled-components";

const sizes = {
  p: css`
    font-size: var(--fs-p);
  `,
  psm: css`
    font-size: var(--fs-psm);
  `,
  pxs: css`
    font-size: var(--fs-pxs);
  `,
};

const Paragraph = styled.p`
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.15em;
  ${(props) => sizes[props.size]}
`;
Paragraph.defaultProps = {
  size: "p",
};

export default Paragraph;
