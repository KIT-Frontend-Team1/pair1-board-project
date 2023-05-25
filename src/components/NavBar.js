import styled from "styled-components";
import Button from "./Button";
const NavBar = () => {
  return (
    <Wrapper>
      <div>logo</div>
      <Button />
    </Wrapper>
  );
};
export default NavBar;

const Wrapper = styled.div`
  width: 15%;
  height: 100vh;
  background-color: grey;
  position: fixed;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div && button {
    margin: 20px;
  }
`;
