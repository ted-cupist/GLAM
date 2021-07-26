import { UserDataType } from "../../../util/type/UserDataType";
import { Content, SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface InterestProps {
  data: UserDataType;
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
        {data.interest.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
        {!data.interest.length && (
          <Content>
            <span
              onClick={() => {
                setModal(true);
                setModalType(ModalType.INTEREST);
              }}
            >
              선택해주세요
            </span>
          </Content>
        )}
      </TagArea>
    </TagsArea>
  );
};

export default Interest;
