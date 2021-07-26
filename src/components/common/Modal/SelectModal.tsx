import styled from "styled-components";
import {
  Background,
  BasicModalStyle,
  SelectArea,
  SelectSpan,
  SelectedSpan,
  SelectModalArea,
  CustomModalTitle,
} from "../../Profile/ProfileStyle";

interface SelectModalProps {
  title: string;
  name: string;
  model: string[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  onChangeItem: (value: string, name: string) => void;
}

const SelectModal = ({
  title,
  name,
  model,
  setModal,
  selected,
  onChangeItem,
}: SelectModalProps) => {
  return (
    <>
      <Background onClick={() => setModal(false)} />
      <SelectModalArea>
        <CustomModalTitle>{title}</CustomModalTitle>
        <SelectArea itemsNumber={model.length}>
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
                  onChangeItem(item, name);
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

export default SelectModal;
