import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface PhysicalProps {}

const Physical = ({}: PhysicalProps) => {
  return (
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
  );
};

export default Physical;
