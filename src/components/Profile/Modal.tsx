import { IProfileInput } from "../../util/interface/IProfile";
import SelectModal from "../common/Modal/SelectModal";
import physicalModel from "../../util/models/body";
import { UserDataType } from "../../util/type/UserDataType";
import InputModal from "../common/Modal/InputModal";
import EducationModel from "../../util/models/Education";
import ReligionModel from "../../util/models/religion";
import PleasureModel from "../../util/models/pleasure";
import ModalType from "../../util/enum/ModalType";
import BloodModel from "../../util/models/bloodType";
import RaceModel from "../../util/models/race";
import CalendarModal from "../common/Modal/CalendarModal";
import CitiesModel from "../../util/models/cities";

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
      {modalType === ModalType.HOME && (
        <SelectModal
          title="위치"
          model={CitiesModel}
          setModal={setModal}
          selected={input?.home}
        />
      )}
      {modalType === ModalType.TALL && (
        <InputModal
          setModal={setModal}
          title="키를 변경하시겠어요?"
          placeholder="키"
          input={input.tall}
          name="tall"
          setInput={onChangeInput}
        />
      )}
      {modalType === ModalType.PHYSICAL && (
        <SelectModal
          title="체형"
          model={physicalModel}
          setModal={setModal}
          selected={input?.physical}
        />
      )}
      {modalType === ModalType.RECTAL && (
        <InputModal
          setModal={setModal}
          title="직장 변경하시겠어요?"
          placeholder="직장"
          input={input.rectal}
          name="rectal"
          setInput={onChangeInput}
        />
      )}
      {/* 직업 */}
      {modalType === ModalType.EDUCATION && (
        <SelectModal
          title="학력"
          model={EducationModel}
          setModal={setModal}
          selected={input?.grade}
        />
      )}
      {modalType === ModalType.SCHOOL && (
        <InputModal
          setModal={setModal}
          title="학교를 변경하시겠어요?"
          placeholder="학교"
          input={input.school}
          name="school"
          setInput={onChangeInput}
        />
      )}
      {/* 성격 */}
      {modalType === ModalType.RELIGION && (
        <SelectModal
          title="종교"
          model={ReligionModel}
          setModal={setModal}
          selected={input?.religion}
        />
      )}
      {modalType === ModalType.BEAR && (
        <SelectModal
          title="음주"
          model={PleasureModel}
          setModal={setModal}
          selected={input?.bear}
        />
      )}
      {modalType === ModalType.SMOKING && (
        <SelectModal
          title="흡연"
          model={PleasureModel}
          setModal={setModal}
          selected={input?.smoking}
        />
      )}
      {modalType === ModalType.BLOOD_TYPE && (
        <SelectModal
          title="혈액형"
          model={BloodModel}
          setModal={setModal}
          selected={input?.bloodType}
        />
      )}
      {modalType === ModalType.RACE && (
        <SelectModal
          title="인종"
          model={RaceModel}
          setModal={setModal}
          selected={input?.race}
        />
      )}
    </div>
  );
};

export default Modal;
