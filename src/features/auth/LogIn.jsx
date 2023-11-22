import Button from "../../components/atoms/Button";
import { useState } from "react";
import FormRow from "../../components/FormRow";
import styled from "styled-components";
import Input from "../../components/atoms/Input";
import { useLogin } from "./useLogin";
// import { Form } from "react-router-dom";
import StyledForm from "../../components/StyledForm";
import { toast } from "react-hot-toast";
import Heading from "../../components/atoms/Heading";
const FormContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  margin: 1rem;
  gap: 3rem;
`;
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast("Fill up the form first", {
        icon: "🙄",
      });

      return;
    }
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <FormContainer>
      <Heading type="h5" as="h1" color="gradient">
        Login to Tour Account
      </Heading>
      <StyledForm onSubmit={handleSubmit} type="regular">
        <FormRow label="Email Address">
          <Input
            autoComplete="username"
            type="email"
            placeholder="Email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            type="password"
            placeholder="Password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRow>
        <Button>LogIn</Button>
      </StyledForm>
    </FormContainer>
  );
}

export default LogIn;
