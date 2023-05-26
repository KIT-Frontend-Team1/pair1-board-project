import styled from "styled-components";
import { useContext } from "react";
import ModalContext from "../context/ModalContext";

const NavBar = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  //글 추가하는 모달창 여는 함수
  const onClickModalOpen = () => {
    console.log("click");
    setIsModalOpen(true);
  };
  return (
    <Wrapper>
      <div>logo</div>
      <Button onClick={onClickModalOpen}>post</Button>
    </Wrapper>
  );
};
export default NavBar;

const Wrapper = styled.div`
  width: 15%;
  height: 100vh;
  position: fixed;
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div && button {
    margin: 20px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 25px;
`;
