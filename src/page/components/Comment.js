import styled from "styled-components";

const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <Wrapper>
      <Title>Comment</Title>
      <CommentContainer>
        {comments.map((comment) => {
          return (
            <OneComment>
              <div>{comment.User.name}</div>
              <div>{comment.content}</div>
            </OneComment>
          );
        })}
      </CommentContainer>
      <CommentInput placeholder="댓글 작성..." />
    </Wrapper>
  );
};

export default Comments;
const Title = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  padding-top: 10px;
  top: 0;
`;
const CommentContainer = styled.div`
  margin-top: 40px;
  background-color: skyblue;
  height: 480px;
  width: 330px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 350px;
  position: relative;
  padding-top: 10px;
  padding-left: 10px;
`;
const OneComment = styled.div`
  margin-bottom: 20px;
`;
const CommentInput = styled.input`
  width: 330px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  background-color: yellowgreen;
`;
