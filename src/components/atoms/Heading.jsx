import styled, { css } from "styled-components";
import { devices } from "../layout/Queries";

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
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.25em;
  ${(props) => types[props.type]}
  @media ${devices.tablet} {
    letter-spacing: 3px;
  }
`;

Heading.defaultProps = {
  type: "h1",
};

export default Heading;
