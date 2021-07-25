import styled from "styled-components";
import { Background } from "../../Profile/ProfileStyle";

interface InputModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  placeholder: string;
  input: string;
  name: string;
  setInput: (value: string | Date, name: string) => void;
  onClickFunction?: () => void;
}

const InputModal = ({
  setModal,
  title,
  input,
  placeholder,
  name,
  setInput,
  onClickFunction,
}: InputModalProps) => {
  return (
    <>
      <Background
        onClick={() => {
          setModal(false);
        }}
      ></Background>
      <InputModalArea>
        <Title>{title}</Title>
        <CustomInput
          value={input}
          placeholder={placeholder}
          name={name}
          onChange={(e) => {
            setInput(e.target.value, e.target.name);
          }}
        />
        <ModalBtn
          onClick={() => {
            onClickFunction && onClickFunction();
            setModal(false);
          }}
        >
          변경하기
        </ModalBtn>
        <ModalBtn bottom={true} onClick={() => setModal(false)}>
          돌아가기
        </ModalBtn>
      </InputModalArea>
    </>
  );
};

const InputModalArea = styled.div`
  z-index: 101;
  position: fixed;
  min-width: 17rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
`;

const Title = styled.h4`
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
`;

const ModalBtn = styled.button<{ bottom?: boolean }>`
  border: none;
  width: 80%;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  font-size: 1rem;
  ${(props) =>
    props.bottom && "margin-bottom: 1rem; background : none; font-size:0.8rem;"}
  &:hover {
    ${(props) => !props.bottom && "background :#1c9dea ;"}
  }
  padding: 5px 0;
`;

const CustomInput = styled.input`
  width: 80%;
  border-radius: 2px;
  background: #e7e7e742;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  border: 1px solid #e4e4e4;
  outline: none;
`;

export default InputModal;
