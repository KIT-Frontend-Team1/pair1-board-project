import LayOut from "../components/Layout";
import PostList from "./components/PostList";
import styled from "styled-components";
import Footer from "../components/Footer";
import AddModal from "./components/AddModal";
import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import Pagination from "./components/Pagination";

const MainPage = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  return (
    <Wrapper>
      {isModalOpen && <AddModal />}
      <LayOut>
        <PostList />
      </LayOut>
      {/*페이지 버튼 컨테이너*/}
      <Footer><Pagination/></Footer>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div``;
