import { IProfileInput } from "../../util/interface/IProfile";
import { UserDataType } from "../../util/type/UserDataType";
import ProfileMain from "./ProfileMain";
import ProfileModify from "./ProfileModify";

interface ProfileProps {
  data: UserDataType;
  onClickModify: boolean;
  setOnClickModify: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  input: IProfileInput;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  onChangeInput: (value: string | Date, name: string) => void;
  handleProfileChange: () => void;
  introModal: boolean;
  setIntroModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModifyIntro: () => void;
  personality: string[];
  setPersonality: React.Dispatch<React.SetStateAction<string[]>>;
  charm: string[];
  setCharm: React.Dispatch<React.SetStateAction<string[]>>;
  interest: string[];
  setInterest: React.Dispatch<React.SetStateAction<string[]>>;
  lifeStyle: string[];
  setLifeStyle: React.Dispatch<React.SetStateAction<string[]>>;
}

const Profile = ({
  data,
  onClickModify,
  setOnClickModify,
  modal,
  setModal,
  modalType,
  setModalType,
  input,
  birth,
  setBirth,
  onChangeInput,
  handleProfileChange,
  introModal,
  setIntroModal,
  handleModifyIntro,
  personality,
  setPersonality,
  charm,
  setCharm,
  interest,
  setInterest,
  lifeStyle,
  setLifeStyle,
}: ProfileProps) => {
  return (
    <>
      {onClickModify ? (
        <ProfileModify
          data={data}
          modal={modal}
          setModal={setModal}
          setOnClickModify={setOnClickModify}
          modalType={modalType}
          setModalType={setModalType}
          input={input}
          birth={birth}
          setBirth={setBirth}
          onChangeInput={onChangeInput}
          handleProfileChange={handleProfileChange}
          introModal={introModal}
          setIntroModal={setIntroModal}
          handleModifyIntro={handleModifyIntro}
          personality={personality}
          setPersonality={setPersonality}
          charm={charm}
          setCharm={setCharm}
          interest={interest}
          setInterest={setInterest}
          lifeStyle={lifeStyle}
          setLifeStyle={setLifeStyle}
        />
      ) : (
        <ProfileMain data={data} />
      )}
    </>
  );
};

export default Profile;
