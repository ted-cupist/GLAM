import { UserDataType } from "../../../util/type/UserDataType";
import { SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface InterestProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Interest = ({ data, setModal, setModalType }: InterestProps) => {
  return (
    <TagsArea>
      <SubTitle>관심사</SubTitle>
      <TagArea
        onClick={() => {
          setModal(true);
          setModalType(ModalType.INTEREST);
        }}
      >
        {data?.interest.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
      </TagArea>
    </TagsArea>
  );
};

export default Interest;
