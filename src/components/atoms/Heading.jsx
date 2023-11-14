import styled, { css } from "styled-components";


const types = {
  h1: css`
    font-size: var(--fs-h1);
  `,
  h2: css`
    font-size: var(--fs-h2);
  `,
  h3: css`
    font-size: var(--fs-h3);
  `,
  h4: css`
    font-size: var(--fs-h4);
  `,
  h5: css`
    font-size: var(--fs-h5);
  `,
  h6: css`
    font-size: var(--fs-h6);
  `,
};

const Heading = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  ${(props) => types[props.type]}
`;

Heading.defaultProps = {
  type: "h1",
};

export default Heading;
