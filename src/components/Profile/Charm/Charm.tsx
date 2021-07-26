import styled from "styled-components";
import { UserDataType } from "../../../util/type/UserDataType";
import { Content, SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface CharmProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Charm = ({ data, setModal, setModalType }: CharmProps) => {
  return (
    <CharmArea>
      <SubTitle>매력 포인트</SubTitle>
      <TagArea
        onClick={() => {
          setModal(true);
          setModalType(ModalType.CHARM);
        }}
      >
        {data?.charm.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
        {!data?.charm.length && (
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
    </CharmArea>
  );
};

const CharmArea = styled(TagsArea)`
  padding-top: 0.5rem;
  border-top: 1px solid #00000092;
`;

export default Charm;
