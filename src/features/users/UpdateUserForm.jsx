import StyledForm from "../../components/StyledForm";
import Input from "../../components/atoms/Input";
import FormRow from "../../components/FormRow";
import FileInput from "../../components/FileInput";
import Button from "../../components/atoms/Button";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useUpdateUser } from "./useUpdateUser";
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

function UpdateUserForm() {
  const { updateUserData, isUpdatingData } = useUpdateUser();
  const { userData } = useOutletContext();

  const {
    firstName: currentFirstName,
    lastName: currentLastName,
    email: currentEmail,
    avatar: currentAvatar,
  } = userData;

  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName)
      return toast("What we need to update?", {
        icon: "🤔",
      });

    updateUserData({ firstName, lastName, avatar });
  }

  function handleCancel() {
    setFirstName("");
    setLastName("");
    setAvatar(null);
    toast("Okey-Dokey", {
      icon: "👌",
    });
  }
  return (
    <StyledForm type="regular" onSubmit={handleSubmit}>
      <Heading type="h5" as="h4">
        Update Name & Avatar
      </Heading>
      <FormRow label="Update First Name">
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="fullName"
          disabled={isUpdatingData}
        />
      </FormRow>
      <FormRow label="Update Last Name">
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          id="fullName"
          disabled={isUpdatingData}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
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

export default UpdateUserForm;
