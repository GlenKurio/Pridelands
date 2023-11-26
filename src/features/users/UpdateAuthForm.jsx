import StyledForm from "../../components/StyledForm";
import Input from "../../components/atoms/Input";
import FormRow from "../../components/FormRow";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { useUpdateUser } from "./useUpdateUser";
import { useUpdateUserAuth } from "./useUpdateAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Heading from "../../components/atoms/Heading";

const CancelButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: transparent;
  border-radius: var(--border-radius-full);
  border: 1px solid var(--color-brand-500);
  color: var(--color-brand-500);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all;
  transition-duration: 0.3s;
  &:hover {
    background-color: var(--color-add-green-2);
    border: 1px solid var(--color-add-green-2);
    color: var(--color-brand-50);
  }
`;

function UpdateAuthForm() {
  const { updateUserData, isUpdatingData } = useUpdateUser();
  const { updateAuthUser, isUpdating } = useUpdateUserAuth();
  const { userData } = useOutletContext();

  const {
    firstName: currentFirstName,
    lastName: currentLastName,
    email: currentEmail,
    avatar: currentAvatar,
  } = userData;

  const [email, setEmail] = useState(currentEmail);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password)
      return toast("What we need to update?", {
        icon: "🤔",
      });
    if (password !== passwordConfirm)
      return toast("Passwords need to match", {
        icon: "☝",
      });
    updateAuthUser({ email, password });
    updateUserData({ email });
    handleCancel();
  }

  function handleCancel() {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    toast("Okey-Dokey", {
      icon: "👌",
    });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading type="h5" as="h4">
        Update Email & Password
      </Heading>
      <FormRow label="Update Email">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          disabled={isUpdatingData}
        />
      </FormRow>
      <FormRow label="New Password">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="email"
          disabled={isUpdatingData}
        />
      </FormRow>
      <FormRow label="Confirm Password">
        <Input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          id="email"
          disabled={isUpdatingData}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isUpdatingData}>Update Profile</Button>
        <CancelButton type="reset" onClick={handleCancel}>
          Cancel
        </CancelButton>
      </FormRow>
    </StyledForm>
  );
}

export default UpdateAuthForm;
