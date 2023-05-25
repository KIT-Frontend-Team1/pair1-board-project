import styled from "styled-components";
import { useState } from "react";

const OnePost = () => {
  //댓글창 true면 보여주고, false면 숨겨짐
  const [isComment, setIsComment] = useState(false);

  const onClickCommentShow = () => {
    setIsComment((prev) => !prev);
  };

  return (
    <Wrapper>
      <PostContainer>
        <PostImage />
        <TextContainer>
          글 들어가는 곳
          <CommentButton onClick={onClickCommentShow}>
            댓글 컨테이너 보이는 버튼
          </CommentButton>
        </TextContainer>
      </PostContainer>
      {isComment && <CommentContainer>댓글 보이는 곳</CommentContainer>}
    </Wrapper>
  );
};
export default OnePost;

const Wrapper = styled.div`
  height: 600px;
  background-color: white;
  display: flex;
`;

const PostContainer = styled.div``;

const CommentContainer = styled.div`
  height: 605px;
  width: 400px;
  background-color: aqua;
`;
const PostImage = styled.img`
  width: 500px;
  height: 500px;
  background-color: grey;
`;

const TextContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 100px;
`;
const CommentButton = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  background-color: pink;
`;
