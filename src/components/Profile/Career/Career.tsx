import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface CareerProps {
  data: UserDataType | undefined;
}

const Career = ({ data }: CareerProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>직장</SubTitle>
        <SubTitle>직업</SubTitle>
        <SubTitle>학력</SubTitle>
        <SubTitle>학교</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>{data?.rectal ? data?.rectal : "없음"}</Content>
        <Content>{data?.job}</Content>
        <Content>{data?.grade}</Content>
        <Content>{data?.school}</Content>
      </Contents>
    </ContentArea>
  );
};

export default Career;
