import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";
import ModalType from "../../../util/enum/ModalType";

interface PhysicalProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Physical = ({ data, setModal, setModalType }: PhysicalProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>키</SubTitle>
        <SubTitle>체형</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.TALL);
            }}
          >
            {data?.tall}cm
          </span>
        </Content>
        <Content>
          <span
            onClick={() => {
              setModal(true);
              setModalType(ModalType.PHYSICAL);
            }}
          >
            {data?.physical}
          </span>
        </Content>
      </Contents>
    </ContentArea>
  );
};

export default Physical;
