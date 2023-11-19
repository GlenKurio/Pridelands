import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { logOut } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OutContainer = styled.div`
  margin-top: 5rem;
`;

function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogOut() {
    await dispatch(logOut());

    toast.success("Successfully Logged Out");

    return navigate("/login");
  }
  return (
    <OutContainer>
      <Button type="text" size="md" onClick={handleLogOut}>
        LogOut
      </Button>
    </OutContainer>
  );
}

export default LogOut;
