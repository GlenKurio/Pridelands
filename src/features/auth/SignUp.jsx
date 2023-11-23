import { useState } from "react";
import FormRow from "../../components/FormRow";
import StyledForm from "../../components/StyledForm";
import Input from "../../components/atoms/Input";
import { useSignup } from "./useSignup";
import Button from "../../components/atoms/Button";
import toast from "react-hot-toast";
import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import StyledLink from "../../components/atoms/StyledLink";
import { addUser } from "../../services/apiUsers";

const FormContainer = styled.div`
  width: 100%;
  margin: 4rem 1rem;
  min-height: 100vh;
`;
const MarginContainer = styled.div`
  margin: 2rem;
`;

const SmText = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-gray-800);
`;

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;
  const { signup, isLoading } = useSignup();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword
    ) {
      toast("Fill up the form first", {
        icon: "🙄",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast("Looks like passwords doesn`t match", {
        icon: "😬",
      });
      return;
    }
    signup(
      { ...formFields },
      {
        onSettled: () => {
          setFormFields(defaultFormFields);
        },
      }
    ),
      addUser({ ...formFields });
  }
  return (
    <FormContainer>
      <MarginContainer>
        <Heading type="h4" as="h1" color="gradient">
          Create an Account
        </Heading>
      </MarginContainer>
      <StyledForm onSubmit={handleSubmit} type="regular">
        <FormRow label="First Name">
          <Input
            required
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
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
        <FormRow label="Password">
          <Input
            required
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label="Confirm Password">
          <Input
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </FormRow>
        <Button disabled={isLoading}>Create Account</Button>
      </StyledForm>
      <MarginContainer>
        <SmText>OR</SmText>
      </MarginContainer>
      <MarginContainer>
        <StyledLink to="/signup" type="text">
          Login to Your Account
        </StyledLink>
      </MarginContainer>
    </FormContainer>
  );
}

export default SignUp;
