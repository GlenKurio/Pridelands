import styled, { css } from "styled-components";

const sizes = {
  p: css`
    font-size: var(--fs-p);
    line-height: 1.7;
  `,
  psm: css`
    font-size: var(--fs-psm);
    line-height: 1;
  `,
  pxs: css`
    font-size: var(--fs-pxs);
  `,
};

const Paragraph = styled.p`
  font-weight: 400;
  color: var(--color-gray-900);
  letter-spacing: 0.05em;
  ${(props) => sizes[props.size]}
`;
Paragraph.defaultProps = {
  size: "p",
};

export default Paragraph;
