import styled from "styled-components";
import OnePost from "./OnePost";
import { MockPost } from "../../data/faker";

const PostList = () => {
  //pageData : 한 페이지에 들어가는 데이터 수
  const PageData = MockPost(3);
  console.log(PageData);

  return (
    <Wrapper>
      {PageData.map((data) => {
        return <OnePost data={data} />;
      })}
      {/*이미지 불러오는 법*/}
      {/* <Img src={`${data[0].PostImg[0]}`} /> */}
    </Wrapper>
  );
};

export default PostList;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
