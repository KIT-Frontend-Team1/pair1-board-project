import LayOut from "../components/Layout";
import PostList from "./components/PostList";
import styled from "styled-components";
import Footer from "../components/Footer";
import AddModal from "./components/AddModal";
const MainPage = () => {
  return (
    <Wrapper>
      {/* <AddModal /> */}
      <LayOut>
        <PostList />
      </LayOut>
      {/*페이지 버튼 컨테이너*/}
      <Footer>페이지 버튼 들어가는 곳</Footer>
    </Wrapper>
  );
};

export default MainPage;

// const ButtonContainer = styled.div`
//   width: 80%;
//   height: 100px;
//   background-color: yellow;
//   padding-left: 20%;
//   right: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Wrapper = styled.div``;
