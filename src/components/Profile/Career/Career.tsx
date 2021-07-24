import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface CareerProps {}

const Career = ({}: CareerProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>직장</SubTitle>
        <SubTitle>직업</SubTitle>
        <SubTitle>학력</SubTitle>
        <SubTitle>학교</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>없음</Content>
        <Content>프로그래머(개발자)</Content>
        <Content>기타</Content>
        <Content>없음</Content>
      </Contents>
    </ContentArea>
  );
};

export default Career;
