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
  data: UserDataType | undefined;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  input: IProfileInput;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  onChangeInput: (value: string | Date, name: string) => void;
  handleProfileChange: () => void;
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
}: ProfileProps) => {
  /**
   * 닉네임
   * 성별
   * 생일
   * 위치
   * 소개
   * 키
   * 체형
   * 직장
   * 직업
   * 학력
   * 학교
   * 성격 3개 선택 가능
   * 종교
   * 음주
   * 흡연
   * 혈액형
   * 인종
   * 매력포인트
   * 관심사
   * 라이프 스타일
   */
  return (
    <ProfileArea>
      <ProfileHeader>
        <CancelIconImg src={CancelIcon} />
        <h3>프로필 수정</h3>
      </ProfileHeader>
      <ProfileImg />
      <Basic data={data} setModal={setModal} setModalType={setModalType} />
      <Intro data={data} />
      <Physical data={data} setModal={setModal} setModalType={setModalType} />
      <Career data={data} setModal={setModal} setModalType={setModalType} />
      <Tendency data={data} setModal={setModal} setModalType={setModalType} />
      {/* 성향 */}
      <Charm data={data} />
      {/* 매력 */}
      <Interest data={data} />
      <LifeStyle data={data} />
      {modal && (
        <Modal
          data={data}
          setModal={setModal}
          modalType={modalType}
          input={input}
          birth={birth}
          setBirth={setBirth}
          onChangeInput={onChangeInput}
          handleProfileChange={handleProfileChange}
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
