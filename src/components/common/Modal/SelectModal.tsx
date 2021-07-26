import styled from "styled-components";
import {
  Background,
  BasicModalStyle,
  SelectArea,
  SelectSpan,
  SelectedSpan,
} from "../../Profile/ProfileStyle";

interface SelectModalProps {
  title: string;
  model: string[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string | undefined;
}

const SelectModal = ({
  title,
  model,
  setModal,
  selected,
}: SelectModalProps) => {
  return (
    <>
      <Background onClick={() => setModal(false)} />
      <SelectModalArea>
        <CustomModalTitle>{title}</CustomModalTitle>
        <SelectArea>
          {model.map((item, key) =>
            selected === item ? (
              <SelectedSpan
                onClick={() => {
                  setModal(false);
                }}
                key={key}
              >
                {item}
              </SelectedSpan>
            ) : (
              <SelectSpan
                onClick={() => {
                  setModal(false);
                }}
                key={key}
              >
                {item}
              </SelectSpan>
            )
          )}
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