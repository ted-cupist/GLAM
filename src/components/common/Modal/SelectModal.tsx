import styled from "styled-components";
import {
  Background,
  BasicModalStyle,
  ModalTitle,
  SelectArea,
  SelectDiv,
} from "../../Profile/ProfileStyle";

interface SelectModalProps {
  title: string;
  model: string[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectModal = ({ title, model, setModal }: SelectModalProps) => {
  return (
    <>
      <Background onClick={() => setModal(false)} />
      <SelectModalArea>
        <CustomModalTitle>{title}</CustomModalTitle>
        <SelectArea>
          {model.map((item, key) => (
            <SelectDiv key={key}>{item}</SelectDiv>
          ))}
        </SelectArea>
      </SelectModalArea>
    </>
  );
};

const SelectModalArea = styled(BasicModalStyle)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
`;

const CustomModalTitle = styled.h4`
  padding: 0.5rem 0;
`;

export default SelectModal;
