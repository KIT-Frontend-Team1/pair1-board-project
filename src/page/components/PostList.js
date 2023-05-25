import styled from "styled-components";
import OnePost from "./OnePost";

const PostList = () => {
  return (
    <Wrapper>
      <OnePost />
    </Wrapper>
  );
};

export default PostList;

const Wrapper = styled.div`
  padding: 50px;
  width: 80%;
  background-color: skyblue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
