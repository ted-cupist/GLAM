import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface CareerProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Career = ({ data, setModal, setModalType }: CareerProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>직장</SubTitle>
        <SubTitle>직업</SubTitle>
        <SubTitle>학력</SubTitle>
        <SubTitle>학교</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.RECTAL);
            }}
          >
            {data?.rectal ? data?.rectal : "없음"}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.JOB);
            }}
          >
            {data?.job}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.EDUCATION);
            }}
          >
            {data?.grade}
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.SCHOOL);
            }}
          >
            {data?.school}
          </span>
        </Content>
      </Contents>
    </ContentArea>
  );
};

export default Career;
