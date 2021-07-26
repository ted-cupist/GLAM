import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface TendencyProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Tendency = ({ data, setModal, setModalType }: TendencyProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>성격</SubTitle>
        <SubTitle>종교</SubTitle>
        <SubTitle>음주</SubTitle>
        <SubTitle>흡연</SubTitle>
        <SubTitle>혈액형</SubTitle>
        <SubTitle>인종</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content
          onClick={() => {
            setModal(true);
            setModalType(ModalType.PERSONALITY);
          }}
        >
          {data?.personality.map((item, key) => (
            <span key={key}>{item} </span>
          ))}
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.RELIGION);
            }}
          >
            {data?.religion}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.BEAR);
            }}
          >
            {data?.bear}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.SMOKING);
            }}
          >
            {data?.smoking}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.BLOOD_TYPE);
            }}
          >
            {data?.bloodType}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.RACE);
            }}
          >
            {data?.race}
          </span>
        </Content>
      </Contents>
    </ContentArea>
  );
};

export default Tendency;
