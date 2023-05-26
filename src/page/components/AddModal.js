import styled from "styled-components";
import Button from "../../components/Button";
import { GrFormClose } from "react-icons/gr";
const AddModal = () => {
  return (
    <Wrapper>
      <Form>
        <RelativeContainer>
          <GrFormClose size="30px" />
          <div>포스트 작성하는 곳</div>
          <TextArea>asdf</TextArea>
          <Button />
        </RelativeContainer>
      </Form>
    </Wrapper>
  );
};
export default AddModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;
const Form = styled.form`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const TextArea = styled.textarea`
  margin-top: 10px;
  width: 480px;
  height: 300px;
  background-color: yellowgreen;
  margin-bottom: 190px;
`;

const RelativeContainer = styled.div`
  position: relative;
`;
