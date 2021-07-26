import styled from "styled-components";
import {
  Background,
  BasicModalStyle,
  CustomInput,
  CustomProfileBtn,
  ModalTitle,
} from "../../Profile/ProfileStyle";

interface InputModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  placeholder: string;
  input: string | number;
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
        <ModalTitle>{title}</ModalTitle>
        <CustomInput
          value={input}
          placeholder={placeholder}
          name={name}
          onChange={(e) => {
            setInput(e.target.value, e.target.name);
          }}
        />
        <CustomProfileBtn
          onClick={() => {
            onClickFunction && onClickFunction();
            setModal(false);
          }}
        >
          변경하기
        </CustomProfileBtn>
        <CustomProfileBtn bottom={true} onClick={() => setModal(false)}>
          돌아가기
        </CustomProfileBtn>
      </InputModalArea>
    </>
  );
};

const InputModalArea = styled(BasicModalStyle)`
  min-width: 17rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
`;

export default InputModal;
