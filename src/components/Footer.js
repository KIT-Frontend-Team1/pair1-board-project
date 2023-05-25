import styled from "styled-components";

//페이지 버튼 컨테이너
const Footer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  width: 85%;
  height: 70px;
  background-color: yellow;
  margin-left: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
