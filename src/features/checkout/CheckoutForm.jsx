import StyledForm from "../../components/StyledForm";
import FormRow from "../../components/FormRow";
import Input from "../../components/atoms/Input";
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import { useState } from "react";
import { useUser } from "../auth/useUser";
import { toast } from "react-hot-toast";
import { usePlaceBooking } from "./useBookings";
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const defaultFormFields = {
  user: "",
  slots: null,
  tour: "",
  date: "",
};

function CheckoutForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, phone, id } = formFields;
  const { isLoading, user } = useUser();
  const { placeBooking, isPlacing } = usePlaceBooking();

  if (isLoading) return <div>Loading...</div>;
  const { id: userId } = user;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !phone || !firstName || !lastName || !id) {
      toast("Fill up the form first", {
        icon: "🙄",
      });
      return;
    }
    setFormFields({ ...formFields, id: userId });
    placeBooking({ ...formFields });

    setFormFields(defaultFormFields);
  }
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Heading type="h5" as="h2">
          Fill Up the form to finalize your order
        </Heading>
        <FormRow label="First Name">
          <Input
            required
            type="text"
            name="firstName"
            value={firstName}
            id="firstName"
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Last Name">
          <Input
            required
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Email">
          <Input
            required
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Phone Number">
          <Input
            required
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </FormRow>
        <Button> </Button>
      </StyledForm>
    </FormContainer>
  );
}

export default CheckoutForm;
