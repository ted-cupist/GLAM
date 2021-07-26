import styled from "styled-components";
import CancelIcon from "../../assets/img/CancelIcon.png";
import { IProfileInput } from "../../util/interface/IProfile";
import { UserDataType } from "../../util/type/UserDataType";
import Basic from "./Basic";
import Career from "./Career";
import Charm from "./Charm";
import Interest from "./Interest";
import Intro from "./Intro";
import LifeStyle from "./LifeStyle";
import Modal from "./Modal";
import Physical from "./Physical";
import ProfileImg from "./ProfileImg";
import Tendency from "./Tendency";

interface ProfileProps {
  data: UserDataType;
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
    <ProfileArea>
      <ProfileHeader>
        <CancelIconImg src={CancelIcon} />
        <h3>프로필 수정</h3>
      </ProfileHeader>
      <ProfileImg data={data.profile_img} />
      <Basic data={data} setModal={setModal} setModalType={setModalType} />
      <Intro
        data={data}
        input={input.intro}
        modal={introModal}
        setModal={setIntroModal}
        onChangeInput={onChangeInput}
        handleModifyIntro={handleModifyIntro}
      />
      <Physical data={data} setModal={setModal} setModalType={setModalType} />
      <Career data={data} setModal={setModal} setModalType={setModalType} />
      <Tendency data={data} setModal={setModal} setModalType={setModalType} />
      {/* 성향 */}
      <Charm data={data} setModal={setModal} setModalType={setModalType} />
      {/* 매력 */}
      <Interest data={data} setModal={setModal} setModalType={setModalType} />
      <LifeStyle data={data} setModal={setModal} setModalType={setModalType} />
      {modal && (
        <Modal
          setModal={setModal}
          modalType={modalType}
          input={input}
          birth={birth}
          setBirth={setBirth}
          onChangeInput={onChangeInput}
          handleProfileChange={handleProfileChange}
          personality={personality}
          setPersonality={setPersonality}
          charm={charm}
          setCharm={setCharm}
          interest={interest}
          setInterest={setInterest}
          lifeStyle={lifeStyle}
          setLifeStyle={setLifeStyle}
        />
      )}
    </ProfileArea>
  );
};

const CancelIconImg = styled.img`
  position: absolute;
  width: 2rem;
  left: 0;
  margin-left: 3px;
`;

const ProfileHeader = styled.header`
  width: 100%;
  text-align: center;
  position: relative;
`;

const ProfileArea = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

export default Profile;
