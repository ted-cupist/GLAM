import { useCallback, useEffect } from "react";
import { IProfileInput } from "../../../util/interface/IProfile";
import { UserDataType } from "../../../util/type/UserDataType";
import InputModal from "../../common/Modal/InputModal";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface BasicProps {
  data: UserDataType | undefined;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  input: IProfileInput;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Basic = ({
  data,
  modal,
  setModal,
  modalType,
  setModalType,
  input,
  onChangeInput,
}: BasicProps) => {
  const OpenModal = useCallback(() => {
    if (modal) {
      switch (modalType) {
        case "nickname":
          return (
            <InputModal
              setModal={setModal}
              title="닉네임을 변경하시겠어요?"
              input={input.nickname}
              setInput={onChangeInput}
            />
          );
      }
    }
  }, [modal, modalType]);

  useEffect(() => {
    OpenModal();
  }, [OpenModal]);

  return (
    <ContentArea>
      {OpenModal()}
      <Contents>
        <SubTitle>닉네임</SubTitle>
        <SubTitle>성별</SubTitle>
        <SubTitle>생일</SubTitle>
        <SubTitle>위치</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content
          onClick={() => {
            setModal(true);
            setModalType("nickname");
          }}
        >
          {data?.nickname}
        </Content>
        <Content change={true}>{data?.gender}</Content>
        <Content>{data?.birth}</Content>
        <Content>{data?.home}</Content>
      </Contents>
    </ContentArea>
  );
};

export default Basic;
