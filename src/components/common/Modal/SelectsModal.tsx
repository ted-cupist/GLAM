import { useCallback } from "react";
import {
  Background,
  CustomModalTitle,
  SelectArea,
  SelectedSpan,
  SelectModalArea,
  SelectSpan,
} from "../../Profile/ProfileStyle";

interface SelectsModalProps {
  title: string;
  model: string[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectsModal = ({
  title,
  model,
  setModal,
  selected,
  setValue,
}: SelectsModalProps) => {
  let count = 0;
  const selectedItem = useCallback(
    (modelItem: string) => {
      count++;
      return (
        <SelectedSpan
          onClick={() => {
            setValue(selected.filter((item) => item !== modelItem));
          }}
        >
          {modelItem}
        </SelectedSpan>
      );
    },
    [count, selected, setValue]
  );

  return (
    <>
      <Background onClick={() => setModal(false)} />
      <SelectModalArea>
        <CustomModalTitle>{title}</CustomModalTitle>
        <SelectArea itemsNumber={model.length}>
          {model.sort().map((modelItem, modelKey) => (
            <div key={modelKey}>
              {selected && modelItem === selected.sort()[count] ? (
                <>{selectedItem(modelItem)}</>
              ) : (
                <SelectSpan
                  key={modelKey}
                  onClick={() => {
                    if (title === "성격") {
                      if (selected.length < 3) {
                        setValue([...selected, modelItem]);
                      } else {
                        alert("최대 3개까지 선택이 됩니다.");
                      }
                    } else {
                      setValue([...selected, modelItem]);
                    }
                  }}
                >
                  {modelItem}
                </SelectSpan>
              )}
            </div>
          ))}
        </SelectArea>
      </SelectModalArea>
    </>
  );
};

export default SelectsModal;
