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
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  onChangeInput: (value: string | Date, name: string) => void;
  handleProfileChange: () => void;
}

const Modal = ({
  data,
  setModal,
  modalType,
  input,
  birth,
  setBirth,
  onChangeInput,
  handleProfileChange,
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
          onClickFunction={handleProfileChange}
        />
      )}
      {modalType === ModalType.BIRTH && (
        <CalendarModal setModal={setModal} date={birth} setInput={setBirth} />
      )}
      {modalType === ModalType.HOME && (
        <SelectModal
          title="위치"
          name="home"
          model={CitiesModel}
          setModal={setModal}
          selected={input?.home}
          onChangeItem={onChangeInput}
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
          onClickFunction={handleProfileChange}
        />
      )}
      {modalType === ModalType.PHYSICAL && (
        <SelectModal
          title="체형"
          name="physical"
          model={physicalModel}
          setModal={setModal}
          selected={input?.physical}
          onChangeItem={onChangeInput}
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
          onClickFunction={handleProfileChange}
        />
      )}
      {modalType === ModalType.JOB && (
        <InputModal
          setModal={setModal}
          title="직업을 변경하시겠어요?"
          placeholder="직업"
          input={input.job}
          name="job"
          setInput={onChangeInput}
          onClickFunction={handleProfileChange}
        />
      )}
      {modalType === ModalType.EDUCATION && (
        <SelectModal
          title="학력"
          name="grade"
          model={EducationModel}
          setModal={setModal}
          selected={input?.grade}
          onChangeItem={onChangeInput}
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
          onClickFunction={handleProfileChange}
        />
      )}
      {/* 성격 */}
      {modalType === ModalType.RELIGION && (
        <SelectModal
          title="종교"
          name="religion"
          model={ReligionModel}
          setModal={setModal}
          selected={input?.religion}
          onChangeItem={onChangeInput}
        />
      )}
      {modalType === ModalType.BEAR && (
        <SelectModal
          title="음주"
          name="bear"
          model={PleasureModel}
          setModal={setModal}
          selected={input?.bear}
          onChangeItem={onChangeInput}
        />
      )}
      {modalType === ModalType.SMOKING && (
        <SelectModal
          title="흡연"
          name="smoking"
          model={PleasureModel}
          setModal={setModal}
          selected={input?.smoking}
          onChangeItem={onChangeInput}
        />
      )}
      {modalType === ModalType.BLOOD_TYPE && (
        <SelectModal
          title="혈액형"
          name="bloodType"
          model={BloodModel}
          setModal={setModal}
          selected={input?.bloodType}
          onChangeItem={onChangeInput}
        />
      )}
      {modalType === ModalType.RACE && (
        <SelectModal
          title="인종"
          name="race"
          model={RaceModel}
          setModal={setModal}
          selected={input?.race}
          onChangeItem={onChangeInput}
        />
      )}
    </div>
  );
};

export default Modal;
