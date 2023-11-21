import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all;
  transition-duration: 0.3s;
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
  padding: 1rem 2rem;
  font-size: 1rem;
`;
export default StyledLink;
