import styled, { css } from "styled-components";

const sizes = {
  p: css`
    font-size: var(--fs-p);
    line-height: 1.3;
  `,
  psm: css`
    font-size: var(--fs-psm);
    line-height: 1.4;
  `,
  pxs: css`
    font-size: var(--fs-pxs);
  `,
};

const colors = {
  white: css`
    color: var(--color-brand-50);
  `,
  black: css`
    color: var(--color-gray-900);
  `,
};

const Paragraph = styled.p`
  font-weight: 400;

  letter-spacing: 0.05em;
  ${(props) => sizes[props.size]}
  ${(props) => colors[props.color]}
`;
Paragraph.defaultProps = {
  size: "p",
  color: "black",
};

export default Paragraph;
