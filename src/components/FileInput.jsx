import styled from "styled-components";
import { devices } from "./layout/Queries";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  max-width: 200px;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-gray-900);
    background-color: var(--color-brand-500);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    display: flex;

    &:hover {
      background-color: var(--color-brand-400);
    }

    @media ${devices.tablet} {
      flex-direction: column;
    }
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export default FileInput;
