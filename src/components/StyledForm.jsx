import styled, { css } from "styled-components";
import { Form } from "react-router-dom";
import { devices } from "./layout/Queries";

const StyledForm = styled(Form)`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 2rem;
      /* Box */
      background-color: var(--color-brand-50);
      border: 1px solid var(--color-brand-500);
      border-radius: var(--border-radius-md);
      margin: 0 auto;
      @media ${devices.laptopL} {
        max-width: 600px;
      }
      min-width: 300px;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

    overflow: hidden;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

StyledForm.defaultProps = {
  type: "regular",
};

export default StyledForm;
