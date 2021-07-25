import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface BasicProps {
  data: UserDataType | undefined;
}

const Basic = ({ data }: BasicProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>닉네임</SubTitle>
        <SubTitle>성별</SubTitle>
        <SubTitle>생일</SubTitle>
        <SubTitle>위치</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>{data?.nickname}</Content>
        <Content change={true}>{data?.gender}</Content>
        <Content>{data?.birth}</Content>
        <Content>{data?.home}</Content>
      </Contents>
    </ContentArea>
  );
};

export default Basic;
