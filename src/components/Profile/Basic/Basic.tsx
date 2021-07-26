import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface BasicProps {
  data: UserDataType;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Basic = ({ data, setModal, setModalType }: BasicProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>닉네임</SubTitle>
        <SubTitle>성별</SubTitle>
        <SubTitle>생일</SubTitle>
        <SubTitle>위치</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.NICKNAME);
            }}
          >
            {data.nickname}
          </span>
        </Content>
        <Content change={true}>{data.gender}</Content>
        <Content
          onClick={() => {
            setModal(true);
            setModalType(ModalType.BIRTH);
          }}
        >
          <span>{data.birth}</span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.HOME);
            }}
          >
            {data.home}
          </span>
        </Content>
      </Contents>
    </ContentArea>
  );
};

export default Basic;
