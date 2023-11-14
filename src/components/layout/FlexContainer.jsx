import styled, { css } from "styled-components";

const direction = {
  column: css`
    flex-direction: column;
  `,
  row: css`
    flex-direction: row;
  `,
};

const FlexContainer = styled.div`
  display: flex;
  ${(props) => direction[props.direction]}
`;

FlexContainer.defaultProps = {
  direction: "row",
};

export default FlexContainer;
