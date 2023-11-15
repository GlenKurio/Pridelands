import styled, { css } from "styled-components";
import { devices } from "../layout/Queries";

const types = {
  h1: css`
    font-size: var(--fs-h1);
    text-align: center;
    text-shadow: var(--shadow-lg);
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
    letter-spacing: 0.25em;
  `,
  h6: css`
    font-size: var(--fs-h6);
  `,
};

const colors = {
  gradient: css`
    background-image: linear-gradient(
      to right,
      var(--color-brand-500),
      var(--color-add-orange)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  `,
};

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;

  letter-spacing: 0.1em;
  ${(props) => types[props.type]}
  ${(props) => colors[props.color]}
  @media ${devices.tablet} {
    letter-spacing: 3px;
  }
`;

Heading.defaultProps = {
  type: "h1",
};

export default Heading;
