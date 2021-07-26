import { UserDataType } from "../../../util/type/UserDataType";
import { SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface LifeStyleProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const LifeStyle = ({ data, setModal, setModalType }: LifeStyleProps) => {
  return (
    <TagsArea>
      <SubTitle>라이프 스타일</SubTitle>
      <TagArea
        onClick={() => {
          setModal(true);
          setModalType(ModalType.LIFESTYLE);
        }}
      >
        {data?.lifeStyle.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
      </TagArea>
    </TagsArea>
  );
};

export default LifeStyle;
