import Heading from "../../components/atoms/Heading";
import styled from "styled-components";

import UpdateUserForm from "./UpdateUserForm";
import { useOutletContext } from "react-router-dom";
import { devices } from "../../components/layout/Queries";
import UpdateAuthForm from "./UpdateAuthForm";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

const FormsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

function UpdateProfile() {
  const userData = useOutletContext();
  return (
    <Container>
      <Heading type="h5" as="h3">
        Update Your Profile
      </Heading>
      <FormsContainer>
        <UpdateUserForm context={{ userData }} />
        <UpdateAuthForm context={{ userData }} />
      </FormsContainer>
    </Container>
  );
}

export default UpdateProfile;
