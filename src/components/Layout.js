import NavBar from "./NavBar";
import styled from "styled-components";
const LayOut = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  );
};

export default LayOut;

const Wrapper = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  margin-left: 15%;
  width: 85%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
