import styled, { css } from "styled-components";

const type = {
  primary: css`
    background: linear-gradient(
      to right,
      var(--color-brand-500),
      var(--color-add-orange)
    );
    border-radius: var(--border-radius-full);
    border: none;
    color: var(--color-brand-50);
    box-shadow: var(--shadow-sm);
    &:hover {
      background: linear-gradient(
        to right,
        var(--color-add-green-1),
        var(--color-add-green-2)
      );

      box-shadow: var(--shadow-lg);
    }
  `,
  reversed: css`
    background: linear-gradient(
      to right,
      var(--color-add-green-1),
      var(--color-add-green-2)
    );
    border-radius: var(--border-radius-full);
    border: none;
    color: var(--color-brand-50);
    box-shadow: var(--shadow-sm);
    &:hover {
      background: linear-gradient(
        to right,
        var(--color-brand-500),
        var(--color-add-orange)
      );

      box-shadow: var(--shadow-lg);
    }
  `,
  secondary: css`
    background-color: var(--color-gray-50);
    border-radius: var(--border-radius-full);
    border: 1px solid var(--color-brand-500);
    color: var(--color-brand-500);
    &:hover {
      background-color: var(--color-add-green-2);
      border: 1px solid var(--color-add-green-2);
      color: var(--color-brand-50);
    }
  `,

  text: css`
    border: none;
    background-color: transparent;
    color: var(--color-brand-500);
    text-decoration: underline;
    text-underline-offset: 0.25em;
    &:hover {
      color: var(--color-add-green-2);
    }
  `,
};

const size = {
  sm: css`
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
  `,

  md: css`
    padding: 1rem 2rem;
    font-size: 1rem;
  `,

  lg: css`
    padding: 1.5rem 2.5rem;
    font-size: 1.25rem;
  `,
};

const Button = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all;
  transition-duration: 0.3s;
  ${(props) => size[props.size]}
  ${(props) => type[props.type]}
`;

Button.defaultProps = {
  size: "md",
  type: "primary",
};

export default Button;
