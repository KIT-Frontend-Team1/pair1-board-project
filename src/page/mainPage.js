import LayOut from "../components/Layout";
import PostList from "./components/PostList";
import styled from "styled-components";
import Footer from "../components/Footer";
import AddModal from "./components/AddModal";
import { useContext } from "react";
import ModalContext from "../context/ModalContext";

const MainPage = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <Wrapper>
      {isModalOpen && <AddModal />}
      <LayOut>
        <PostList />
      </LayOut>
      {/*페이지 버튼 컨테이너*/}
      <Footer>페이지 버튼 들어가는 곳</Footer>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div``;
