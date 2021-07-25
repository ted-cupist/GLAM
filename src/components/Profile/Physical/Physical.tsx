import { UserDataType } from "../../../util/type/UserDataType";
import SelectModal from "../../common/Modal/SelectModal";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";
import physicalModel from "../../../util/models/body";

interface PhysicalProps {
  data: UserDataType | undefined;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const Physical = ({
  data,
  modal,
  setModal,
  modalType,
  setModalType,
}: PhysicalProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>키</SubTitle>
        <SubTitle>체형</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>{data?.tall}cm</Content>
        <Content
          onClick={() => {
            setModal(true);
            setModalType("physical");
          }}
        >
          {data?.physical}
        </Content>
      </Contents>
      {modal && modalType === "physical" && (
        <SelectModal title="체형" model={physicalModel} setModal={setModal} />
      )}
    </ContentArea>
  );
};

export default Physical;
