import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface TendencyProps {}

const Tendency = ({}: TendencyProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>성격</SubTitle>
        <SubTitle>종교</SubTitle>
        <SubTitle>음주</SubTitle>
        <SubTitle>흡연</SubTitle>
        <SubTitle>혈액형</SubTitle>
        <SubTitle>인종</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>활발한, 성실한, 단순한</Content>
        <Content>무교</Content>
        <Content>안 함</Content>
        <Content>안 함</Content>
        <Content>B형</Content>
        <Content>한국인</Content>
      </Contents>
    </ContentArea>
  );
};

export default Tendency;
