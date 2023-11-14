import styled, { css } from "styled-components";

const type = {
  autofit: css`
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
