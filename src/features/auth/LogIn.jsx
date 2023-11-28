import Button from "../../components/atoms/Button";
import { useState } from "react";
import FormRow from "../../components/FormRow";
import styled from "styled-components";
import Input from "../../components/atoms/Input";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
// import { Form } from "react-router-dom";
import StyledForm from "../../components/StyledForm";
import { toast } from "react-hot-toast";
import Heading from "../../components/atoms/Heading";
import StyledLink from "../../components/atoms/StyledLink";

const FormContainer = styled.div`
  min-height: 100vh;
  margin: 6rem 1rem;
  gap: 3rem;
`;

const MarginContainer = styled.div`
  margin: 2rem;
`;

const SmText = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-gray-800);
`;
function LogIn() {
  const navigate = useNavigate();
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
          navigate("/account");
        },
      }
    );
  }
  return (
    <FormContainer>
      <MarginContainer>
        <Heading type="h4" as="h1" color="gradient">
          Login to Your Account
        </Heading>
      </MarginContainer>
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
      <MarginContainer>
        <SmText>OR</SmText>
      </MarginContainer>
      <MarginContainer>
        <StyledLink to="/signup" type="text">
          Create an account
        </StyledLink>
      </MarginContainer>
    </FormContainer>
  );
}

export default LogIn;
