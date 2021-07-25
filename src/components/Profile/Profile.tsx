import styled from "styled-components";
import CancelIcon from "../../assets/img/CancelIcon.png";
import { UserDataType } from "../../util/type/UserDataType";
import Basic from "./Basic";
import Career from "./Career";
import Charm from "./Charm";
import Interest from "./Interest";
import Intro from "./Intro";
import LifeStyle from "./LifeStyle";
import Physical from "./Physical";
import ProfileImg from "./ProfileImg";
import Tendency from "./Tendency";

interface ProfileProps {
  data: UserDataType | undefined;
}

const Profile = ({ data }: ProfileProps) => {
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
      <Basic data={data} />
      <Intro data={data} />
      <Physical data={data} />
      <Career data={data} />
      <Tendency data={data} />
      {/* 성향 */}
      <Charm data={data} />
      {/* 매력 */}
      <Interest data={data} />
      <LifeStyle data={data} />
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
