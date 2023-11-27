import StyledForm from "../../components/StyledForm";
import FormRow from "../../components/FormRow";
import Input from "../../components/atoms/Input";
import Heading from "../../components/atoms/Heading";
import { useUserData } from "../users/useUserData";
import styled from "styled-components";
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function CheckoutForm() {
  //   const { isLoading, userData } = useUserData();
  //   if (isLoading) return <div>Loading</div>;
  //   const { firstName, lastName, phone, email } = userData;
  return (
    <FormContainer>
      <StyledForm>
        <Heading type="h5" as="h2">
          Fill Up the form to finalize your order
        </Heading>
        <FormRow label="First Name">
          <Input required type="text" value={firstName} id="firsName" />
        </FormRow>
        <FormRow label="Last Name">
          <Input required type="text" value={lastName} id="lastName" />
        </FormRow>
        <FormRow label="Email">
          <Input required type="email" value={email} id="email" />
        </FormRow>
        <FormRow label="Phone Number">
          <Input required type="text" value={phone} id="phone" />
        </FormRow>
      </StyledForm>
    </FormContainer>
  );
}

export default CheckoutForm;
