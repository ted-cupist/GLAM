import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>닉네임</SubTitle>
        <SubTitle>성별</SubTitle>
        <SubTitle>생일</SubTitle>
        <SubTitle>위치</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>정성훈</Content>
        <Content change={true}>남성</Content>
        <Content>2003-01-28</Content>
        <Content>대구광역시</Content>
      </Contents>
    </ContentArea>
  );
};

export default Basic;
