import { IProfileInput } from "../../util/interface/IProfile";
import SelectModal from "../common/Modal/SelectModal";
import physicalModel from "../../util/models/body";
import { UserDataType } from "../../util/type/UserDataType";
import InputModal from "../common/Modal/InputModal";
import CalendarModal from "../common/Modal/CalendarModal";
import EducationModel from "../../util/models/Education";
import ModalType from "../../util/enum/ModalType";

interface ModalProps {
  data: UserDataType | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  input: IProfileInput;
  onChangeInput: (value: string | Date, name: string) => void;
  handleNicknameChange: () => void;
}

const Modal = ({
  data,
  setModal,
  modalType,
  input,
  onChangeInput,
  handleNicknameChange,
}: ModalProps) => {
  return (
    <div>
      {modalType === ModalType.PHYSICAL && (
        <SelectModal
          title="체형"
          model={physicalModel}
          setModal={setModal}
          selected={data?.physical}
        />
      )}
      {modalType === ModalType.NICKNAME && (
        <InputModal
          setModal={setModal}
          title="닉네임을 변경하시겠어요?"
          placeholder="닉네임"
          input={input.nickname}
          name="nickname"
          setInput={onChangeInput}
          onClickFunction={handleNicknameChange}
        />
      )}
      {modalType === ModalType.BIRTH && (
        <CalendarModal
          setModal={setModal}
          date={input.birth}
          setInput={onChangeInput}
        />
      )}
      {modalType === ModalType.EDUCATION && (
        <SelectModal
          title="학력"
          model={EducationModel}
          setModal={setModal}
          selected={data?.grade}
        />
      )}
    </div>
  );
};

export default Modal;
