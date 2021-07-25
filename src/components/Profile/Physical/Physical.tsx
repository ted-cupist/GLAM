import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface PhysicalProps {
  data: UserDataType | undefined;
}

const Physical = ({ data }: PhysicalProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>키</SubTitle>
        <SubTitle>체형</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>{data?.tall}cm</Content>
        <Content>{data?.physical}</Content>
      </Contents>
    </ContentArea>
  );
};

export default Physical;
