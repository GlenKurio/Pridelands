import Input from "../../components/atoms/Input";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { useState } from "react";
import { logIn } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogOut from "./LogOut";
import toast from "react-hot-toast";

const Form = styled.form`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--color-brand-500);
  border-radius: 30px;
  box-shadow: var(--shadow-md);
  padding: 2rem;
  min-width: 500px;
  & label {
    text-align: left;
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
    color: var(--color-gray--900);
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FormContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  margin: 1rem;
`;
function LogIn() {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) return;

    dispatch(logIn({ email, password }));

    if (error) toast.error("Provided email or password are incorrect");
    setEmail("");
    setPassword("");
    toast.success("Successfully Logged In");
    return navigate("/account");
  }

  return (
    <FormContainer onSubmit={handleLogin}>
      <Form>
        <FormRow>
          <label htmlFor="Email">Enter Your Email</label>
          <Input
            type="email"
            placeholder="Email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <label htmlFor="Password">Enter Your Password</label>
          <Input
            type="password"
            placeholder="Password"
            id="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormRow>
        <Button type="submit">LogIn</Button>
      </Form>
      <LogOut />
    </FormContainer>
  );
}

export default LogIn;
