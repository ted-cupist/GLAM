import styled from "styled-components";
import UserImg from "../../assets/img/userimg.png";
import CancelIcon from "../../assets/img/CancelIcon.png";

const Profile = () => {
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
   * 성격
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
      <ImaArea>
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
      </ImaArea>
      <SpanArea>
        <BasicSpan>얼굴이 선명히 보이는 사진으로 올려주세요</BasicSpan>
        <CustomA href="http://www.glam.am/guide_line/ko/?fbclid=IwAR1o58GoKQaYALG3FQhFQkvCpq7IM3UedviFyCPETHv8D6gojm9F0Zr1Bxg">
          더 알아보기
        </CustomA>
      </SpanArea>
      <ContentArea>
        <Contents>
          <SubTitle>닉네임</SubTitle>
          <SubTitle>성별</SubTitle>
          <SubTitle>생일</SubTitle>
          <SubTitle>위치</SubTitle>
        </Contents>
        <Contents right={true}>
          <Content>정성훈</Content>
          <Content>남성</Content>
          <Content>2003-01-28</Content>
          <Content>대구광역시</Content>
        </Contents>
      </ContentArea>
      <IntroArea>
        <h4>소개</h4>
        <IntroInput
          type="text"
          placeholder="회원님의 매력을 간단하게 소개해주세요"
        />
        <span>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</span>
      </IntroArea>
      <ContentArea>
        <Contents>
          <SubTitle>키</SubTitle>
          <SubTitle>체형</SubTitle>
        </Contents>
        <Contents right={true}>
          <Content>180cm</Content>
          <Content>보통</Content>
        </Contents>
      </ContentArea>
      <ContentArea>
        <Contents>
          <SubTitle>키</SubTitle>
          <SubTitle>체형</SubTitle>
        </Contents>
        <Contents right={true}>
          <Content>180cm</Content>
          <Content>보통</Content>
        </Contents>
      </ContentArea>
    </ProfileArea>
  );
};

const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const IntroInput = styled.input``;

const ProfileArea = styled.div`
  width: 100%;
`;

const ContentArea = styled.div`
  display: flex;
  border-top: 1px solid #00000092;
  padding: 1rem 0;
  border-bottom: 1px solid #00000092;
`;

const CustomA = styled.a`
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 0.5rem;
  color: black;
`;

const Contents = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: column;
  ${(props) => props.right && "margin-left:2rem"}
`;

const BasicSpan = styled.span`
  margin-left: 0.5rem;
  font-size: 13px;
`;

const SubTitle = styled(BasicSpan)`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const Content = styled(SubTitle)`
  color: #1c9dea;
`;

const SpanArea = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomImg = styled.img`
  width: 30%;
  margin: 5px;
  flex-grow: 1;
`;

const ImaArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Profile;
