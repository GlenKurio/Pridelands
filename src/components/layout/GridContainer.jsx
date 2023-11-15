import styled, { css } from "styled-components";

const type = {
  autofitFeatures: css`
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    width: 100%;
    place-content: center;
    gap: 1rem;
    padding: 1rem;
  `,
  autofitCard: css`
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  `,
  autofitMD: css`
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  `,
};

const GridContainer = styled.div`
  display: grid;
  ${(props) => type[props.type]}
`;

GridContainer.defaultProps = {
  type: "autofit",
};

export default GridContainer;
